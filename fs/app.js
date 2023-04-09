const {readFileSync, writeFileSync, write} = require('fs')

//this will go into the file name mentioned in the first argument, and store it in first.  
const first = readFileSync('../pathTest/first.txt', 'utf8');
const second = readFileSync('../pathTest/second.txt', 'utf8');
console.log(second)
console.log(first);

//this will create a new file. first is the path and basename is the file name, second argument is the file content. 
const third = writeFileSync('../pathTest/third.txt', "I am the third file");

//now to read the file again, 
const readThird = readFileSync('../pathTest/third.txt', 'utf8')
console.log(readThird);

//if the first argument is already there, node will overwrite whatever it is. 
const third2 = writeFileSync('../pathTest/third.txt', "I am the third file 2");

//if you want to append to the file instead, use the same format and add flag to it with string a set. 
writeFileSync('../pathTest/third.txt', "I am the appended part", {flag: 'a'});


const readThird2 = readFileSync('../pathTest/third.txt', 'utf8')
console.log(readThird2);

writeFileSync('../pathTest/result-sync.txt', `Here is the result: ${readThird}, ${first}`);
const readResultSync = readFileSync('../pathTest/result-sync.txt', 'utf8')
console.log(readResultSync);
