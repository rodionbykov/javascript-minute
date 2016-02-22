var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write("Hello World!");    
    response.end();
}).listen(9090);

console.log("Server started at port 9090");