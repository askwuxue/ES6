const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        let html = fs.readFileSync('./promise.html', 'utf8');
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html);
    }
})

server.listen(3000);