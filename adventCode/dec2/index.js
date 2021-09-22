const passwordPhilosophy = {};

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

//  prove 2 passwords are valid in test.txt

passwordPhilosophy.partOne = (file) => {

    let lines = readFile(file)
    let result = 0;

    lines.forEach(line => {
       
        let array = line.split(':');
        let policy = array[0];
        let password = array[1];
        let keyArray = policy.split(' ');
        let key = [keyArray[1]];
        let timesAllowed = policy.split('-'); // is an array ex [1, -, 3]
        // göra en variable för första talet, en för andra talet? splitta vid - istället
        let min = timesAllowed[0] 
        let max = timesAllowed[1].split(' ', 1)
        let letters = [];
       
        // console.log('min: '+ min + ' max: ' + max);
        // steg 1 hämta ut all bokstäver i password som stämmer överens med key 
        for (let i = 0; i < password.length; i++) {
            if (password[i] == key) {     
                // pusha in i letters -
                letters.push(i+1)
            }
        }
        //  om ->
       if (letters.length >= min && letters.length <= parseInt(max)) { 
            // console.log("added 1 to result")
            result += 1
        }      
    });
    console.log("result: " + result)
    return result
}



passwordPhilosophy.partTwo = (file) => {

// exempel med föregående funk som mall
    // min - plats i password som innehåller key
    // max - plats i password som ej får innehålla key

    // Testa med nya conditions.
    let lines = readFile(file)
    let result = 0;

    lines.forEach(line => {
       
        let array = line.split(':');
        let policy = array[0];
        let password = array[1];
        let keyArray = policy.split(' ');
        let key = [keyArray[1]];
        let placements = policy.split('-'); // is an array ex [1, -, 3]
        let key1 = parseInt(placements[0]);
        let key2 = parseInt(placements[1].split(' ', 1))
        let index = [];
        // let letters = [];
        
        // mustHaveKey refers to first position in password - is an integer 
        // all passwords begin with ' ', making mustHaveKey the first index = 1. !This I think is the problem - it should start with 1 - 0 should not exist? Can I  trim away index 0???
        for (let i = 0; i < password.length; i++) {
            if(password[i].includes(key)){
                index.push(i)
                // letters.push(password[i])   
            }
        }
        console.log(index);
    
        if (index.includes(key1) != index.includes(key2)) {
            // console.log('adding to result')
            result += 1
        }


    });
    console.log("result: " + result)
    return result

}


module.exports = passwordPhilosophy;