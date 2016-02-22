var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {    
  
  response.writeHead(200, {'Content-Type': 'text/html'});
  
  fs.readFile('index.src', function(err, contents) {    
    response.end(contents);
  });

}).listen(9090);

console.log("Server started at port 9090");