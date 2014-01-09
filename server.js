var io = require('socket.io').listen(25565),
    ovaltine = require('ovaltine');

io.sockets.on('connection', function (socket) {
  socket.on('decrypt', function (data) {
    try {
       var decrypted = ovaltine.decrypt(data.message, data.pin);
       socket.emit('done-decrypt', decrypted);
    }
    catch(e) {
       socket.emit('done-decrypt', String(e));
    }
  });
  socket.on('encrypt', function (data) {
    try {
       var encrypted = ovaltine.encrypt(data.message, data.pin);
       socket.emit('done-encrypt', encrypted);
    }
    catch(e) {
       socket.emit('done-encrypt', String(e));
    }
  });
});
