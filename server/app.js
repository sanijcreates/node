//like setInterval, .listen is asynchronous as well. it will giving running. 

const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event');
    // the string inside end will be displayed in the screen not the console log. 
    res.end('hello wolrd')
})

server.listen(5000, () => {
    console.log("server is listening in port 5000");
});