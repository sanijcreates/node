const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('home page')
    }
    if(req.url === '/about') {
        res.end('aboutpage')
    }
    //will send the following response incase of an error
    res.end(`
    <h1>oops</h1>
    `)
})

//server listens to a specific to a port 
server.listen(5000)