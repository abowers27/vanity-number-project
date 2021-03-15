"use strict";

const uniqueCount = require("../../helpers.js").uniqueCount;
const getVanityOptions = require("../../helpers.js").getVanityOptions;
const assignLetters = require("../../helpers.js").assignLetters;
const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

describe("Tests helpers", () => {
  describe("uniqueCount()", () => {
    it("uniqueCount should return 5", () => {
      let result = uniqueCount("4758898");
      assert.equal(result, 5);
    });
    it("uniqueCount should return type number", () => {
      let result = uniqueCount("4758898");
      assert.typeOf(result, "number");
    });
  });

  describe("getVanityOptions", () => {
    it("getVanityOptions should match given value", () => {
      let result = getVanityOptions([
        ["w", "x", "y", "z"],
        ["t", "u", "v"],
      ]);

      assert.deepEqual(result, [
        "wt",
        "wu",
        "wv",
        "xt",
        "xu",
        "xv",
        "yt",
        "yu",
        "yv",
        "zt",
        "zu",
        "zv",
      ]);
    });
  });

  describe("assignLetters()", () => {
    it("assignLetters should match given value", () => {
      let result = assignLetters("5099281889");
      console.log(result);
      assert.deepEqual(result, [
        ["w", "x", "y", "z"],
        ["a", "b", "c"],
        ["t", "u", "v"],
        ["1"],
        ["t", "u", "v"],
        ["t", "u", "v"],
        ["w", "x", "y", "z"],
      ]);
    });
  });
});
