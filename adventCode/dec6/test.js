const customCustoms = require("./index");

var assert = require("assert");

// describe("partOne", function () {
//   it("should return sum of all groups yes", function () {
//     assert.strictEqual(customCustoms.partOne("test.txt"), 11);
//   });
// });

// console.log("answer: " + customCustoms.partOne("actual.txt"));

describe("partTwo", function () {
  it("should return amount of same yes questions from each group", function () {
    assert.strictEqual(customCustoms.partTwo("test.txt"), 6);
  });
});

// console.log("answer: " + customCustoms.partTwo("actual.txt"));
