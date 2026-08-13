import { access, readFile, readdir } from "node:fs/promises";
import { dirname, extname, join, normalize, resolve } from "node:path";

const distRoot = resolve("dist");

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(path));
    else if (extname(entry.name) === ".html") files.push(path);
  }
  return files;
}

function internalTarget(fromFile, href) {
  const clean = href.split("#", 1)[0].split("?", 1)[0];
  if (!clean) return null;
  const rawTarget = clean.startsWith("/")
    ? resolve(distRoot, `.${clean}`)
    : resolve(dirname(fromFile), clean);
  if (extname(rawTarget)) return normalize(rawTarget);
  return normalize(join(rawTarget, "index.html"));
}

const missing = [];
const external = new Set();
const htmlFiles = await filesUnder(distRoot);

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (/^(mailto:|tel:|javascript:)/i.test(href)) continue;
    if (/^https?:\/\//i.test(href)) {
      external.add(href);
      continue;
    }
    const target = internalTarget(file, href);
    if (!target) continue;
    try {
      await access(target);
    } catch {
      missing.push(`${file.replace(`${distRoot}/`, "")} -> ${href}`);
    }
  }
}

if (missing.length) {
  console.error("Internal link check failed:\n" + missing.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Internal link check passed (${htmlFiles.length} pages, ${external.size} external destinations recorded).`);
