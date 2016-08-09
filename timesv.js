
const strftime = require('strftime')
const net = require('net')
const sv = net.createServer(function(socket) {
	socket.end(strftime('%Y-%m-%d %H:%M') + '\n');
});
sv.listen(process.argv[2]);