const passwordPhilosophy = require('./index');


var assert = require('assert');


// describe('partOne', function() {
//     it('should return number of valid passwords', function() {
//         assert.strictEqual(passwordPhilosophy.partOne('test.txt'), 3);
//     });
// });

// // answer partOne
// console.log("answer: " + passwordPhilosophy.partOne('actual.txt'));

describe('partTwo', function() {
    it('should return number of valid passwords', function() {
        assert.strictEqual(passwordPhilosophy.partTwo('test.txt'), 2);
    });
});

// answer partTwo
console.log("answer: " + passwordPhilosophy.partTwo('actual.txt'));