import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";
const require = createRequire(import.meta.url);
const ts = require("typescript");
const module = { exports: {} };
const code = ts.transpileModule(
  readFileSync(
    new URL("../src/app/utils/screen-orbit.ts", import.meta.url),
    "utf8",
  ),
  {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  },
).outputText;
vm.runInNewContext(code, { module, exports: module.exports });
const {
  activeScreenIndex,
  stepScreenAngle,
  clampScreenTilt,
  dragScreenRotation,
} = module.exports;
test("front screen selection wraps through full turns in both directions", () => {
  assert.equal(activeScreenIndex(0, 6), 0);
  assert.equal(activeScreenIndex(-60, 6), 1);
  assert.equal(activeScreenIndex(60, 6), 5);
  assert.equal(activeScreenIndex(-780, 6), 1);
  assert.equal(activeScreenIndex(720, 6), 0);
  assert.equal(activeScreenIndex(-29, 6), 0);
  assert.equal(activeScreenIndex(-31, 6), 1);
});
test("controls center the next screen from an in-between drag angle", () => {
  assert.equal(stepScreenAngle(-34, 6, 1), -120);
  assert.equal(stepScreenAngle(-34, 6, -1), 0);
  assert.equal(activeScreenIndex(stepScreenAngle(-300, 6, 1), 6), 0);
});
test("large pointer movements keep tilt within a readable range", () => {
  assert.equal(clampScreenTilt(1000), 24);
  assert.equal(clampScreenTilt(-1000), -24);
  const large = dragScreenRotation(0, -10, 200, 1000);
  assert.equal(large.angle, 70);
  assert.equal(large.tilt, -24);
  const horizontal = dragScreenRotation(-60, 8, -100, 0);
  assert.equal(horizontal.angle, -95);
  assert.equal(horizontal.tilt, 8);
});
test("empty orbit configuration is rejected", () => {
  assert.throws(() => activeScreenIndex(0, 0), /at least one/);
  assert.throws(() => stepScreenAngle(0, 0, 1), /at least one/);
});
