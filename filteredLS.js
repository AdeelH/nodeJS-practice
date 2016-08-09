var fs = require('fs');
var path = require('path');

var ext = '.' + process.argv[3];
fs.readdir(process.argv[2], (err, files) => 
	files.forEach((file) => path.extname(file) != ext || console.log(file))
);