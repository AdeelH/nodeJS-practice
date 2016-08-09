var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

console.log((buf.toString().match(/\n/g) || []).length);