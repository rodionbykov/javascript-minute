var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  
  io.emit('incoming_message', '* new user connected');  
  console.log('a user connected');
    
  socket.on('incoming_message', function(msg){
    socket.broadcast.emit('incoming_message', msg);
    console.log('message: ' + msg);
  });
    
  socket.on('disconnect', function(){
    io.emit('incoming_message', '* user disconnected');  
    console.log('user disconnected');      
  });    
});
// TODO add nicknames support
http.listen(9090, function(){
  console.log('listening on *:9090');
});