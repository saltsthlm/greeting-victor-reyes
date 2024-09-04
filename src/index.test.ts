import { deepEqual } from "node:assert/strict";
import { test } from "node:test";

function greet() {}

test("should greet person", () => {
  const result = greet("Alek");

  deepEqual(result, { message: "Welcome, Alek!" });
});
