const {writeFileSync} = require('fs');

for(let i = 0; i < 1000; i++) {
    writeFileSync('./pathTest/big.txt', `hello ${i}`, {flag : 'a'});
}
