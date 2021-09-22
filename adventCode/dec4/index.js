const passportProcessing = {};
const fs = require("fs");

let readFile = (file) => {
  try {
    // read contents of the file
    const data = fs.readFileSync(file, "UTF-8");
    // split the contents by blank line : \n\s*\n???
    const lines = data.split(/\n\s*\n/);
    return lines;
  } catch (err) {
    console.error(err);
  }
};

passportProcessing.partOne = (file) => {
  let lines = readFile(file);
  let result = 0;

  for (let i = 0; i < lines.length; i++) {
    let passport = lines[i];
    passport = passport.replace(/\r\n/g, " ").replace(/\r/g, "");
    if (passport) {
      let fieldArray = passport.split(" ");
      let keyCounter = 0;
      let requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
      for (let j = 0; j < fieldArray.length; j++) {
        let keyValue = fieldArray[j].split(":");
        let key = keyValue[0];
        for (let k = 0; k < requiredFields.length; k++) {
          if (key === requiredFields[k]) {
            keyCounter += 1;
          }
        }
      }
      if (keyCounter === requiredFields.length) {
        result += 1;
      }
    }
  }
  return result;
};

passportProcessing.partTwo = (file) => {
  let lines = readFile(file);
  let result = 0;

  for (let i = 0; i < lines.length; i++) {
    let passport = lines[i];
    passport = passport.replace(/\r\n/g, " ").replace(/\r/g, "");
    // console.log(passport);
    if (passport) {
      let fieldArray = passport.split(" ");
      let keyCounter = 0;
      let validFields = 0;
      let requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
      for (let j = 0; j < fieldArray.length; j++) {
        let keyValue = fieldArray[j].split(":");
        let key = keyValue[0];
        let value = keyValue[1];
        for (let k = 0; k < requiredFields.length; k++) {
          if (key === requiredFields[k]) {
            keyCounter += 1;
          }
        }
        switch (key) {
          case "byr":
            if (isValidYear(value, 1920, 2002)) {
              validFields += 1;
            }
            break;
          case "iyr":
            if (isValidYear(value, 2010, 2020)) {
              validFields += 1;
            }
            break;
          case "eyr":
            if (isValidYear(value, 2020, 2030)) {
              validFields += 1;
            }
            break;
          case "hgt":
            if (isValidHgt(value)) {
              validFields += 1;
            }
            break;
          case "hcl":
            if (isValidHairColor(value)) {
              validFields += 1;
            }
            break;
          case "ecl":
            if (isValidEyeColor(value)) {
              validFields += 1;
            }
            break;
          case "pid":
            if (isValidPID(value)) {
              validFields += 1;
            }
            break;
        }
      }
      if (
        keyCounter === requiredFields.length &&
        validFields === requiredFields.length
      ) {
        // console.log("number of valid fields: " + validFields);
        result += 1;
      }
    }
  }
  return result;
};

let isValidYear = (year, min, max) => {
  //   console.log(parseInt(year) >= min && year <= max);
  return parseInt(year) >= min && year <= max;
};

let isValidHgt = (hgt) => {
  let measurement = hgt.split(/(c|i)/);
  let number = parseInt(measurement[0]);
  if (measurement[1] === "c") {
    // console.log("hgt in cm");
    return number >= 150 && number <= 193;
  }
  if (measurement[1] === "i") {
    // console.log("hgt in inches");
    return number >= 59 && number <= 76;
  }
  //   console.log("no hgt");
};

let isNumber = (char) => parseInt(char) >= 0 && char <= 9;

let isValidHairColor = (color) => {
  if (color.includes("#")) {
    let hcl = color.split("#");
    let char = hcl[1];
    let validCode = [];
    let isLetter = (char) => char.match(/[a-f]/i);
    if (char.length === 6) {
      for (let i = 0; i < char.length; i++) {
        if (isNumber(char[i]) || isLetter(char[i])) {
          validCode.push(char[i]);
        }
      }
    }
    // console.log("hcl: ");
    return validCode.length === 6;
  }
  //   console.log("no hcl");
};

let isValidEyeColor = (color) => {
  let validColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  let isValid = false;
  for (let i = 0; i < validColors.length; i++) {
    if (color === validColors[i]) {
      isValid = true;
    }
  }
  //   console.log(isValid);
  return isValid;
};

let isValidPID = (pid) => {
  let complete = [];
  if (pid.length === 9) {
    for (let i = 0; i < pid.length; i++) {
      if (isNumber(pid[i])) {
        complete.push(i);
      }
    }
  }
  //   console.log(complete);
  return complete.length === 9;
};
module.exports = passportProcessing;
