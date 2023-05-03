//like setInterval, .listen is asynchronous as well. it will giving running. 

const http = require('http')
const {createReadStream, readFileSync} = require('fs')

const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./pathTest/big.txt', 'utf8')
    fileStream.on('open', () => {
        //this is exactly like doing, res.end()
        fileStream.pipe(res)
    })
    // this is slower has it doesnt read file in chunks. 
    // const text = readFileSync('./pathTest/big.txt', 'utf8')
    // res.end(text)
})

server.listen(5000, () => {
    console.log("server is listening in port 5000");
});