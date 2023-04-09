const { log } = require('console');
const path = require('path')


console.log(path.sep);

//this will join all the passed string and return as a value/default path
const filePath = path.join('/pathTest','subFolder','text.txt')

//if you have something that is abnormal to a path, it will remove it. 
const filePath2 = path.join('/pathTest//','subFolder','text.txt')

console.log(filePath)
console.log(filePath2)

//will print the last path name(base name)
const base = path.basename(filePath);
console.log(base);

//this will print the absolute value of the path, i.e. it will join the dirname with the other values, in order. 
const absolute = path.resolve(__dirname, 'content', 'path', 'text.txt');

console.log(absolute);
