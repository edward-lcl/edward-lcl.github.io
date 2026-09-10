import assert from "node:assert/strict";
import test from "node:test";
import { resolve } from "node:path";
import { internalTarget } from "../scripts/link-check.mjs";

const distRoot = resolve("dist");
const page = resolve(distRoot, "research/recall-debt/index.html");

test("resolves internal links to generated HTML paths", () => {
  assert.equal(internalTarget(page, "/cv/"), resolve(distRoot, "cv/index.html"));
  assert.equal(internalTarget(page, "../before-you-scale/"), resolve(distRoot, "research/before-you-scale/index.html"));
  assert.equal(internalTarget(page, "/favicon.svg"), resolve(distRoot, "favicon.svg"));
  assert.equal(internalTarget(page, "/notes/#latest?ignored"), resolve(distRoot, "notes/index.html"));
  assert.equal(internalTarget(page, "#section"), null);
});
