const http = require('http');
const url = require('url');

const sv = http.createServer((req, res) => {
	if (req.method != 'GET')
		return res.end('Not a GET\n');

	const reqUrl = url.parse(req.url, true);
	const dt = new Date(reqUrl.query.iso);

	if (reqUrl.pathname == '/api/parsetime') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({
					hour: dt.getHours(),
					minute: dt.getMinutes(),
					second: dt.getSeconds()
				}));
	}
	else if (reqUrl.pathname == '/api/unixtime') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify({
					unixtime: dt.getTime()
				}));
	}
	else
		res.end('404');
});

sv.listen(process.argv[2]);