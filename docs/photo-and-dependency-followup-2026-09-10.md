# Photo framing and dependency follow-up

The same original dog photo remains on both homepages. Changed the CSS viewport from 184 × 184 to 184 × 248, enlarged the displayed image from 259 to 430 pixels wide, removed the negative left offset, and adjusted the top offset to -299 pixels. This prioritizes Edward's face and puts the dog toward the right edge. The source photo already crops the left side; no missing pixels were reconstructed and no photographic edits were made.

Ran npm audit, then npm audit fix within the existing dependency ranges. The lockfile now resolves Astro 7.3.2, js-yaml 4.3.2, and svgo 4.1.0. npm reports zero known vulnerabilities. package.json is unchanged. The full privacy/build/link checks pass on 36 pages, and git diff --check passes. npm noted uncovered install scripts for esbuild and optional fsevents; the build succeeded without adding script approvals.

Inside the loop and other prose were not changed in this follow-up. Visual verification remains unavailable: browser request-header policy failed in the preceding pass, and native access to the Codex app is prohibited. No visual acceptance or deployment is claimed.

Remaining verification: desktop/mobile rendering of the taller portrait and recent notebook changes; raw-artifact audit of historical tier measurements and the education sample; human native Chinese review; commit/push and production checks when requested.
