const { log } = require('console');
const {readFile, writeFile} = require('fs')

console.log('start');
const first = readFile('../pathTest/first.txt', 'utf8', ((err, result) => {
    if(err) {
        console.log(err);
    } 
    if(result) {
        console.log('into readfile');
        console.log(result);
    }
}))
console.log('just read readFile');

//the writeFile method doesnt pass a result value like in readFile so, do not write if(result) like in the above func. 
writeFile('../pathTest/async2.txt', 'created through async', ((err, result) => {
    if(err) {
        console.log(err);
        return
    }
        console.log(result);
        console.log('writefile');
 }))
 console.log("just read writeFile");