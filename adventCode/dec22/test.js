const crabCombat = require("./index");

var assert = require("assert");

describe("partOne", function () {
  it("should return winner score", function () {
    assert.strictEqual(crabCombat.partOne("test.txt"), 306);
  });
});

console.log("answer: " + crabCombat.partOne("actual.txt"));

// describe("partTwo", function () {
//   it("should return amount of same yes questions from each group", function () {
//     assert.strictEqual(crabCombat.partTwo("test.txt"), 6);
//   });
// });

// console.log("answer: " + crabCombat.partTwo("actual.txt"));
