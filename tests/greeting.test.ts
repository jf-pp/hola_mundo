import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greeting.js";

describe("greet", () => {
  it("saluda al mundo sin nombre", () => {
    assert.equal(greet(), "¡Hola, mundo!");
  });

  it("saluda al mundo con nombre vacío o solo espacios", () => {
    assert.equal(greet(""), "¡Hola, mundo!");
    assert.equal(greet("   "), "¡Hola, mundo!");
  });

  it("saluda por nombre cuando se le da uno", () => {
    assert.equal(greet("Josué"), "¡Hola, Josué!");
  });

  it("recorta los espacios alrededor del nombre", () => {
    assert.equal(greet("  Josué  "), "¡Hola, Josué!");
  });
});
