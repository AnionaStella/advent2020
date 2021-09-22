const tobogganTrajectory = {};

const fs = require("fs");

let readFile = (file) => {
  try {
    // read contents of the file
    const data = fs.readFileSync(file, "UTF-8");
    // split the contents by new line
    const lines = data.split(/\r?\n/);
    return lines;
  } catch (err) {
    console.error(err);
  }
};

tobogganTrajectory.partOne = (file) => {
  let lines = readFile(file);
  return countTrees(lines, 3, 1);
};

tobogganTrajectory.partTwo = (file) => {
  let lines = readFile(file);
  let slopes = [1, 3, 5, 7];
  let result = 1;

  slopes.forEach((slope) => {
    result *= countTrees(lines, slope, 1);
  });

  result *= countTrees(lines, 1, 2);
  return result;
};

let countTrees = (lines, slope, level) => {
  let toboggan = 0;
  let trees = 0;
  for (let i = 0; i < lines.length; i += level) {
    let line = lines[i];
    if (line[toboggan] === "#") {
      trees += 1;
    }
    toboggan += slope;

    if (toboggan >= line.length) {
      toboggan -= line.length;
    }
  }
  return trees;
};

module.exports = tobogganTrajectory;
