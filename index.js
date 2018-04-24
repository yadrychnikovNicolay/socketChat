const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

io.on('connection', function(socket){
  console.log('Socket connecté');

  socket.on('messageChat', function(data){
    console.log(data);
    io.emit('sendMessage', data);
  });


  socket.on('pseudo', function(pseudo){
    console.log(pseudo);
    io.emit('sendPseudo', pseudo);
  })


  socket.on('disconnect', function(){
    console.log('Socket deco');
  });
});

http.listen(3030, function(req, res){
  console.log("listening on port 3030");
});
