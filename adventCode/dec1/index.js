// to begin
const reportRepair = {};

const fs = require('fs');

let readFile = (file) => {
    try {
        // read contents of the file
        const data = fs.readFileSync(file, 'UTF-8');

        // split the contents by new line
        const lines = data.split(/\r?\n/);

        return lines;

    } catch (err) {
        console.error(err);
    }
}

reportRepair.partOne = (file) => {

    let lines = readFile(file);
    console.log(lines);
    let result;
    for(let i = 0; i < lines.length; i++){
        let no1 = parseInt(lines[i]);
        result =  addTogether(lines, i, no1)
        console.log(result + " result")
        if(result !== -1){
            break;
        }
    } 
    return result;
}

let addTogether = (array, index, item) => {
    for(let j = index+1; j < array.length; j++){
        let item2 = parseInt(array[j]);
        if(item + item2 == 2020){
             return item * item2;
        }
    }
    return -1;
}

let addThree = (array, index2, item1, item2) => {
    for(let k = index2+1; k < array.length; k++){
        let item3 = parseInt(array[k]);
        if(item1 + item2 + item3 == 2020){
            console.log(item1 * item2 * item3 + " added together");
             return item1 * item2 * item3;
        }
    }
    return -1;
}

reportRepair.partTwo = (file) => {

    let lines = readFile(file);
    console.log(lines);
    let result;

    for(let i = 0; i < lines.length; i++){
        let no1 = parseInt(lines[i]);
        let index1 = lines.indexOf(no1)
        for(let j = index1+1; j < lines.length; j++){
            let no2 = parseInt(lines[j]);
            let index2 = lines.indexOf(no2)
            result = addThree(lines, index2, no1, no2)
            if(result !== -1){
                break;}
        }
        console.log(result + " result")
        if(result !== -1){
            break;
        }
    } 
    return  result
}

module.exports = reportRepair;