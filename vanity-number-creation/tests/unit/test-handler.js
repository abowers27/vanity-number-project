"use strict";

const app = require("../../app.js");
const chai = require("chai");
const expect = chai.expect;
let event;

describe("Tests index", function () {
  it("verifies successful response", async () => {
    const result = await app.lambdaHandler(event);

    expect(result).to.be.an("object");

    expect(response).to.be.an("object");
  });
});
