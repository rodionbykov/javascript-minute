var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', onRequest);
server.listen(9090);

console.log("Server started at port 9090");

function onRequest(request, response){    
  response.writeHead(200, {'Content-Type': 'text/html'});
  
  fs.readFile('index.src', function(err, contents) {    
    response.end(contents);
  });
}