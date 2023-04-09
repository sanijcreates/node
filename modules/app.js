//this will access the information from 1-names.js file
const name = require('./1-names');
const sayHi = require('./2-utils');
const data = require('./3-alternate-exports')

console.log(data);
sayHi(name.sanij);