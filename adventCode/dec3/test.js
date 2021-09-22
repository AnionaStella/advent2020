const tobogganTrajectory = require('./index');


var assert = require('assert');


// describe('partOne', function() {
//     it('should return number of trees encountered', function() {
//         assert.strictEqual(tobogganTrajectory.partOne('test.txt'), 7);
//     });
// });

// // answer partOne
// console.log("answer: " + tobogganTrajectory.partOne('actual.txt'));

describe('partTwo', function() {
    it('should return number of trees encountered', function() {
        assert.strictEqual(tobogganTrajectory.partTwo('test.txt'), 336);
    });
});

// // answer partTwo
console.log("answer: " + tobogganTrajectory.partTwo('actual.txt'));