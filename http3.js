const http = require('http');

var dataStore = ['', '', ''];
var count = 3;

for (var i = 0; i < dataStore.length; i++) {
	http.get(process.argv[2 + i], handleResponse(i)).on('error', console.error);
}

function handleResponse(dataIndex) {
	return function(response) {
		response.setEncoding('utf8');
		response.on('error', console.error);
		response.on('data', (x) => { dataStore[dataIndex] += x });
		response.on('end', () => {
			--count || dataStore.forEach((s) => console.log(s));
		});
	}
}