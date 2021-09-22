const crabCombat = {};
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

crabCombat.partOne = (file) => {
  let lines = readFile(file);
  let player1 = lines[0].split(":")[1].replace(/\r\n/g, " ").replace(/\r/g, "");
  let player2 = lines[1].split(":")[1].replace(/\r\n/g, " ").replace(/\r/g, "");
  let deck1 = player1
    .trim()
    .split(" ")
    .map((card) => {
      return parseInt(card);
    });
  let deck2 = player2
    .trim()
    .split(" ")
    .map((card) => {
      return parseInt(card);
    });

  let countTotal = (deck) => {
    let total = 0;
    let counter = 1;
    for (let i = deck.length - 1; i >= 0; i--) {
      total += deck[i] * counter;
      counter++;
    }
    return total;
  };

  let play = (deck1, deck2) => {
    if (deck1.length === 0 || deck2.length === 0) {
      return deck1.length != 0 ? deck1 : deck2;
    }
    let card1 = deck1.shift();
    let card2 = deck2.shift();
    if (card1 > card2) {
      deck1.push(card1, card2);
    } else if (card2 > card1) {
      deck2.push(card2, card1);
    }
    return play(deck1, deck2);
  };

  return countTotal(play(deck1, deck2));
};

module.exports = crabCombat;
