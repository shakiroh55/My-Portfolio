const path = require('path');
const fs = require('fs');
const http = require('http');

 /** 
  * http status code 
  * 200 for successful retrieval
  * 201 for successful creation
  * 300 for redirect
  * 301 for redirect after creation
  * 400 for this is a bad request
  * 403 or forbidden
  * 500 server error
 */

const server = http.createServer((req,res) =>{
    // res.writeHead(200, {'Content-Type': 'text/html'})
    // res.end(`<h1>Hello Shakirat</h1>`)
    if (req.url === '/'){
        let filePath = path.join(__dirname, 'index.html')
        fs.readFile(filePath, 'utf8', (err,data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }
    if (req.url === '/home.html'){
        let filePath = path.join(__dirname, 'home.html')
        fs.readFile(filePath, 'utf8', (err,data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }
    if (req.url === '/about.html'){
        let filePath = path.join(__dirname, 'about.html')
        fs.readFile(filePath, 'utf8', (err,data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }
    if (req.url === '/contact.html'){
        let filePath = path.join(__dirname, 'contact.html')
        fs.readFile(filePath, 'utf8', (err,data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }
    if (req.url === '/index.html'){
        let filePath = path.join(__dirname, 'index.html')
        fs.readFile(filePath, 'utf8', (err,data) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }                 
})

const port = 3000
server.listen(3000, () => {
    console.log(`server is running on port ${port}`)
});