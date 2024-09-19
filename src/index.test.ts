import { throws } from "node:assert";
import { deepEqual } from "node:assert/strict";
import { test } from "node:test";

function greet(name: string) {
  if (name.trim().length === 0) throw new Error("The name should not be empty");

  return { message: `Welcome, ${name}!` };
}

test("should greet person", () => {
  const result = greet("Alek");

  deepEqual(result, { message: "Welcome, Alek!" });
});

test("should throw, if the name is empty", () => {
  const errorMessage = /The name should not be empty$/;
  throws(() => greet(""), errorMessage);
  throws(() => greet(" "), errorMessage);
  throws(() => greet("  "), errorMessage);
});
