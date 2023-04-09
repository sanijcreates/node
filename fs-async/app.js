const {readFile, writeFile} = require('fs')

const first = readFile('../pathTest/first.txt', 'utf8', ((err, result) => {
    if(err) {
        console.log(err);
    } 
    if(result) {
        console.log(result);
    }
}))

writeFile('../pathTest/async.txt', 'created through async', ((err, result) => {
    if(err) {
        console.log(err);
        return
    }
    if(result) {
        return
    }
 }))