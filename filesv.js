const fs = require('fs');
const http = require('http');
const filePath = process.argv[3];
const sv = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	fs.createReadStream(filePath).pipe(res);
});

sv.listen(process.argv[2]);