const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio.listen(server);
const port = 8000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', function (req, res, next) {
  res.json('hi');
  // server.listen(3000, () => {
  //   console.log('listenToServer');
  // });
});

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    console.log('client가 보낸 데이터: ', data);
    io.emit('upload', data);
  });
});
