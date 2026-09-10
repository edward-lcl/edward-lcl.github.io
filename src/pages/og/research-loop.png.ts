import sharp from "sharp";
import { sitePositioning } from "../../data/site";

export const prerender = true;

// Render from canonical copy at build time so social previews cannot retain an old thesis.
export async function GET() {
  const escape = (text: string) => text.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[character]!);
  const { hero, heroEmphasis } = sitePositioning.en;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f6f6f3"/>
    <path d="M60 100H1140M60 540H1140" stroke="#c7c7c1"/>
    <circle cx="71" cy="64" r="5" fill="#315cd0"/>
    <text x="92" y="72" font-family="monospace" font-size="19" fill="#555550">A WORKING NOTEBOOK BY EDWARD</text>
    <text x="60" y="220" font-family="Georgia,serif" font-size="66" fill="#252520">${escape(hero)}</text>
    <text x="60" y="302" font-family="Georgia,serif" font-size="60" fill="#315cd0">${escape(heroEmphasis)}</text>
    <text x="60" y="404" font-family="monospace" font-size="23" fill="#555550">Memory → agents → verification → institutions</text>
    <path d="M960 392C1100 390 1100 475 965 475H62" fill="none" stroke="#315cd0" stroke-width="2"/>
    <path d="M75 468L62 475L75 482" fill="none" stroke="#315cd0" stroke-width="2"/>
    <text x="60" y="589" font-family="Georgia,serif" font-size="28" fill="#252520">Edward Lue Chee Lip</text>
    <text x="1140" y="586" text-anchor="end" font-family="monospace" font-size="19" fill="#555550">edward-lcl.github.io</text>
  </svg>`;
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}
