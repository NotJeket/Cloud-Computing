var http = require('http');
var url = require('url');

function onRequest(request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log('Request from IP ' + request.connection.remoteAddress + ' - Pathname: ' + pathName);
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(new Date().toISOString());
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log('Server has started');

