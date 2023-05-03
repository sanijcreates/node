const {readFile, writeFile} = require('fs').promises;
const util = require('util');
//instead of promisifying to readFiel and WriteFile we go directly do that while importing. 
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        // the code after await, should return a promise. 
        const first = await readFile('./pathTest/first.txt', 'utf8')
        const second = await readFile('./pathTest/second.txt', 'utf8')
        await writeFile('./pathTest/usingpromisify.txt', `wow, ${first} + ${second}, adding asynchronously`)
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
    
}
start();


// The above code simplies the code below using util. 

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (data) {
//                 resolve(data)
//             } else {
//                 reject(err)
//             }
//         })
//     })  
    
// }

// getText('./pathTest/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))