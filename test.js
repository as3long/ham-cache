var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var config = require('./config');

var message = new Buffer('hi server');

function sendHello() {
    client.send(message, 0, message.length, config.port, '127.0.0.1');
}

client.on('message', function(msg){
    console.info('client know server has got the message');
    setTimeout(sendHello, 2000);
});

sendHello();