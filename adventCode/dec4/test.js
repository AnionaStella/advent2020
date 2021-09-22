const passportProcessing = require("./index");

var assert = require("assert");

// describe("partOne", function () {
//   it("should return number of valid passports", function () {
//     assert.strictEqual(passportProcessing.partOne("test.txt"), 2);
//   });
// });

// // answer partOne
// console.log("answer: " + passportProcessing.partOne("actual.txt"));

describe("partTwo", function () {
  it("should return number of valid passports", function () {
    assert.strictEqual(passportProcessing.partTwo("test.txt"), 4);
  });
});

// // answer partTwo
console.log("answer: " + passportProcessing.partTwo("actual.txt"));
