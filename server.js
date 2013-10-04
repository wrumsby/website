'use strict';

var wintersmith = require('wintersmith'),
	http = require('http'),
	path = require('path'),
	fs = require('fs'),
	extensions = {
		'.html': 'text/html',
		'.css': 'text/css'
	};

// create the sites environment, can also be called with a config object. e.g.
// {contents: '/some/contents', locals: {powerLevel: 10}}, ..}
var env = wintersmith('./config.json');

env.config.port = process.env.port || env.config.port;

// build site
env.build(function(error) {
	if (error) {
		console.log('build step error ' + error);
		console.dir(env.config);
		throw error;
	}

	http.createServer(function (req, res) {
		var filename = path.basename(req.url) || 'index.html',
			ext = path.extname(filename),
			localPath = __dirname + '/blog/';

		if (filename === 'index.html') {
			localPath += 'index.html';
		} else {
			// After lots of jumping around replacing + with - seems to
			// not upset Azure like other replacements can.
			localPath += url.parse(req.url).pathname.replace(/\+/g, '-');
		}

		if (!ext) {
			ext = '.html';
			localPath += '/index.html';
		}

		// Azure seems to be running an older version of Node where
		// path.exists has not been deprecated in favour of fs.exists.
		path.exists(localPath, function (exists) {
			if (exists) {
				fs.readFile(localPath, function (err, contents) {
					if (!err) {
						res.writeHead(200, {
							'Content-Type': extensions[ext],
							'Content-Length': contents.length
						});
						res.end(contents);
					} else {
						res.writeHead(500);
						res.end();
					}
				});
			} else {
				res.writeHead(404);
				res.end();
			}
		});
	}).listen(env.config.port);
	console.log('Done!');
});
