const {createReadStream} = require('fs');

//if you add the encoding, it will read the file.
const stream = createReadStream('./pathTest/big.txt', {
    highWaterMark: 90000, 
    encoding:'utf8',
});

stream.on('data', (result) => {
    console.log(result);
})
stream.on('error', (err) => {
    console.log(err);
})