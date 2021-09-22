const binaryBoarding = {};
const fs = require("fs");

let readFile = (file) => {
  try {
    // read contents of the file
    const data = fs.readFileSync(file, "UTF-8");
    // split the contents by blank line : \n\s*\n???
    const lines = data.split(/\r?\n/);
    return lines;
  } catch (err) {
    console.error(err);
  }
};

// binaryBoarding.partOne = (file) => {
//   let lines = readFile(file);
//   let seatId = 0;
//   let rows = [];
//   let seatIds = [];

//   for (let i = 0; i <= 127; i++) {
//     rows.push(i);
//   }

//   for (let i = 0; i < lines.length; i++) {
//     boardingPass = lines[i];
//     let bp = boardingPass.split("");
//     seatId = upperOrLower(bp, rows);
//     seatIds.push(seatId);
//   }
//   //  sätt seatid - testa mot tidigare och byt ut ifall större
//   seatIds.sort((a, b) => a - b);
//   return seatIds[seatIds.length - 1];
// };

// let upperOrLower = (bp, rows) => {
//   let currentRow = rows;
//   let currentSeat = [0, 1, 2, 3, 4, 5, 6, 7];
//   for (let i = 0; i < 7; i++) {
//     let split = currentRow.length / 2;
//     if (bp[i] === "F") {
//       currentRow = currentRow.slice(0, split);
//     }
//     if (bp[i] === "B") {
//       currentRow = currentRow.slice(split);
//     }
//   }
//   for (let i = 7; i < bp.length; i++) {
//     let split = currentSeat.length / 2;
//     if (bp[i] === "L") {
//       currentSeat = currentSeat.slice(0, split);
//     }
//     if (bp[i] === "R") {
//       currentSeat = currentSeat.slice(split);
//     }
//   }
//   //   console.log("hello " + currentRow[0] + " " + currentSeat[0]);
//   return currentRow[0] * 8 + currentSeat[0];
// };
binaryBoarding.partOne = (file) => {
  let lines = readFile(file);
  let highestId = -1;
  for (let i = 0; i < lines.length; i++) {
    let bp = lines[i];
    bp = bp.replace(/F/g, "0");
    bp = bp.replace(/B/g, "1");
    bp = bp.replace(/R/g, "1");
    bp = bp.replace(/L/g, "0");
    let row = parseInt(bp.slice(0, 7), 2);
    let seat = parseInt(bp.slice(7), 2);
    seatId = row * 8 + seat;
    if (seatId > highestId) {
      highestId = seatId;
    }
  }
  return highestId;
};

binaryBoarding.partTwo = (file) => {
  let lines = readFile(file);
  let ids = [];
  let mySeat;
  let highestId = 0;
  for (let i = 0; i < lines.length; i++) {
    let bp = lines[i];
    bp = bp.replace(/F/g, "0");
    bp = bp.replace(/B/g, "1");
    bp = bp.replace(/R/g, "1");
    bp = bp.replace(/L/g, "0");
    let row = parseInt(bp.slice(0, 7), 2);
    let seat = parseInt(bp.slice(7), 2);
    seatId = row * 8 + seat;
    ids.push(seatId);
    if (seatId > highestId) {
      highestId = seatId;
    }
  }
  ids.sort((a, b) => a - b);
  let counter = ids[0];

  for (id of ids) {
    if (id != counter++) {
      mySeat = id - 1;
      break;
    }
  }

  return mySeat;
};

module.exports = binaryBoarding;
