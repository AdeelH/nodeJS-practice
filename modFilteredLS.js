
function filteredLs(dir, ext, callback)
{
	var fs = require('fs');
	var path = require('path');

	var ext = '.' + ext;
	fs.readdir(dir, (err, files) => {
			if (err)
				return callback(err);			
			callback(null, files.filter((file) => path.extname(file) == ext));
		}
	);
}

module.exports = filteredLs;