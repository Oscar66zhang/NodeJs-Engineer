var http = require('http');
var server = http.createServer();

server.listen(3000, function () {
    console.log('Server is running at http://localhost:3000/');
})

server.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
})