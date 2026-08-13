import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const roots = ["src", "public"];
const textExtensions = new Set([".astro", ".css", ".html", ".js", ".json", ".md", ".mjs", ".svg", ".ts", ".txt", ".xml"]);

// These strings identify material that is private, embargoed, or an internal-only route.
// Keep this list outside src/public so the scanner cannot match its own policy.
const blocked = [
  "benchmarkaudit.org",
  "tb3-hard.exe.xyz",
  "Terminal-Bench 3",
  "Terminal Bench 3",
  "11PuswkOledqJP1cr69PDHSnnr3CkIhJdJePIc5RW7d4",
  "reviewer rating",
  "official review submitted",
];

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(path));
    else if (textExtensions.has(extname(entry.name))) files.push(path);
  }
  return files;
}

const findings = [];
for (const root of roots) {
  for (const path of await filesUnder(root)) {
    const content = await readFile(path, "utf8");
    for (const term of blocked) {
      const offset = content.toLowerCase().indexOf(term.toLowerCase());
      if (offset === -1) continue;
      const line = content.slice(0, offset).split("\n").length;
      findings.push(`${relative(process.cwd(), path)}:${line} contains blocked term: ${term}`);
    }
  }
}

if (findings.length) {
  console.error("Privacy scan failed:\n" + findings.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Privacy scan passed (${blocked.length} blocked terms across ${roots.join(", ")}).`);
