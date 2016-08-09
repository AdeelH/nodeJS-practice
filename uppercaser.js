const http = require('http');
const map = require('through2-map');

const sv = http.createServer((req, res) => {
	if (req.method != 'POST')
		return res.end('Not a POST\n');

	req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
});

sv.listen(process.argv[2]);