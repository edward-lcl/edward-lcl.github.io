import { access, readFile, readdir } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const distRoot = resolve("dist");
const origin = "https://edward-lcl.github.io";
async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(async entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(path) : extname(path) === ".html" ? [path] : [];
  }))).flat();
}
const htmlFiles = await filesUnder(distRoot);
const pages = new Map(await Promise.all(htmlFiles.map(async file => [file, await readFile(file, "utf8")])));
const ids = new Map([...pages].map(([file, html]) => [file, new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]))]));
const failures = [];
const external = new Set();
let fragments = 0;
let assets = 0;
for (const [file, html] of pages) {
  const route = file.slice(distRoot.length).replace(/index\.html$/, "");
  for (const match of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    const raw = match[2].replaceAll("&amp;", "&");
    const url = new URL(raw, origin + route);
    if (!["http:", "https:"].includes(url.protocol)) continue;
    if (url.origin !== origin) { external.add(url.href); continue; }
    let target;
    try {
      const path = decodeURIComponent(url.pathname);
      target = resolve(distRoot, `.${path}`);
      if (!extname(target)) target = join(target, "index.html");
      await access(target);
      if (match[1] === "src") assets++;
      if (url.hash && pages.has(target)) {
        fragments++;
        const fragment = decodeURIComponent(url.hash.slice(1));
        if (!ids.get(target).has(fragment)) throw new Error(`missing fragment #${fragment}`);
      }
    } catch (error) {
      failures.push(`${route} -> ${raw}: ${error.code || error.message}`);
    }
  }
}
if (failures.length) {
  console.error("Internal link check failed:\n" + failures.join("\n"));
  process.exit(1);
}
console.log(`Internal links, fragments and assets passed (${pages.size} pages, ${fragments} fragment references, ${assets} asset references; ${external.size} external destinations recorded, not network-tested).`);
