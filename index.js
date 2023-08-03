import * as http from 'http';
import { readFile } from 'fs/promises'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const host = '127.0.0.1';
const port = 8080;
let route;

const requestListener = function (req, res) {
    if(req.url !== "/favicon.ico") {
        switch (req.url) {
            case "/":
                route = "/index.html"
                break;

            case "/about":
                route = "/about.html"
                break;

            case "/contact-me":
                route = "/contact-me.html"
                break;

            default:
                route = "/404.html"
        }
    
        readFile(__dirname + route)
            .then(contents => {
                res.setHeader("Content-Type", "text/html")
                res.writeHead(200);
                res.end(contents);
            })
    }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log('server is running')
})