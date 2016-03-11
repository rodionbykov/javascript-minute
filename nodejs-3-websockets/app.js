var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  socket.on("join", function(nickName){
    socket.nickName = nickName;
    io.emit("incoming_message", nickName + " connected");
    console.log(nickName + " connected");
  })

  socket.on("incoming_message", function(msg){
    var nickName = socket.nickName;

    socket.broadcast.emit("incoming_message", nickName + ": " + msg);
    console.log(nickName + ": " + msg);
  });

  socket.on("disconnect", function(){
    io.emit('incoming_message', socket.nickName + " disconnected");
    console.log(socket.nickName + " disconnected");
  });
});

http.listen(9090, function(){
  console.log('listening on *:9090');
});