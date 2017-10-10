const net = require('net');
const strftime = require('strftime');

const params = process.argv.slice(2);
const port = params[0];

let server = net.createServer(socket => {
    socket.end(strftime('%F %k:%M%n', new Date()));
});

server.listen(port);

/*
var net = require('net')

function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    var d = new Date()
    return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
*/
