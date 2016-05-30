var BaseClass = require('../BaseClass');
var net = require('net');
var _ = require('lodash');

class NetServer extends BaseClass {
    run(config) {
        const dgram = require('dgram');
        const server = dgram.createSocket('udp4');

        server.on('error', (err) => {
            console.log(`server error:\n${err.stack}`);
            server.close();
        });

        server.on('message', (msg, rinfo) => {
            console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
            var message = new Buffer('I got message! from server');
            server.send(message, 0, message.length, rinfo.port, rinfo.address);
        });

        server.on('listening', () => {
            var address = server.address();
            console.log(`server listening ${address.address}:${address.port}`);
        });
        server.bind(config.port);
    }
}

module.exports = NetServer;

