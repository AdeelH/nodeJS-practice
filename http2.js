var http = require('http');

http.get(process.argv[2], function(response) {
	var data = '';
	response.setEncoding('utf8');
	response.on('data', (x) => { data += x });
	response.on('error', console.error);
	response.on('end', () => {
		console.log(data.length);
		console.log(data);
	});
}).on('error', console.error);