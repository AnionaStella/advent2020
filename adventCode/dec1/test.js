const reportRepair = require('./index');


var assert = require('assert');


// describe('partOne', function() {
//     it('should return 514579', function() {
//         assert.strictEqual(reportRepair.partOne('test.txt'), 514579);
//     });
// });

// // answer partOne
// console.log("answer: " + reportRepair.partOne('actual.txt'));

describe('partTwo', function() {
    it('should return 241861950', function() {
        assert.strictEqual(reportRepair.partTwo('test.txt'), 241861950);
    });
});


// answer partTwo
console.log("answer: " + reportRepair.partTwo('actual.txt'));