// modules are imported here (packages we can use for our projects)
// we use the http module to create a server

const http = require('http');

http.createServer(
    function (req, res) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('Hello, world!');
    }
).listen(8080);