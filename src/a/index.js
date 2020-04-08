var net = require('net'),
    port = 23, 
    host = '10.27.10.9',
    socket = net.createConnection(port, host);

socket
  .on('data', function(data) {
          console.log('received: ' + data);
      })
  .on('connect', function() {
          console.log('connected');
      })
  .on('end', function() {
          console.log('closed');
      });