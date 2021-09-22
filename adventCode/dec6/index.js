const customCustoms = {};
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

customCustoms.partOne = (file) => {
  let lines = readFile(file);
  let yesAnswers = 0;
  let line;
  for (let i = 0; i < lines.length; i++) {
    line = lines[i];
    line = line.replace(/\r\n/g, "").replace(/\r/g, "");
    yesAnswers += removeDuplicateCharacters(line).length;
    // console.log(": " + removeDuplicateCharacters(line).length);
  }
  return yesAnswers;
};

let removeDuplicateCharacters = (string) => {
  return string
    .split("")
    .filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join("");
};

customCustoms.partTwo = (file) => {
  let lines = readFile(file);
  let yesAnswers = 0;
  let line;
  for (let i = 0; i < lines.length; i++) {
    line = lines[i];
    line = line.replace(/\r\n/g, " ").replace(/\r/g, "");
    let group = line.split(" ");
    if (group.length > 1) {
      for (let j = 0; j < group.length; j++) {
        let person = group[j];
        for (let k = 0; k < person.length; k++) {
          let questionAnswered = line.split(person[k]).length - 1;
          if (questionAnswered > 2) {
            yesAnswers += 1;
          }
        }
      }
    }
    if (group.length <= 1) {
      for (answer in group) {
        yesAnswers += 1;
      }
    }
  }
  return yesAnswers;
};
module.exports = customCustoms;
