'use strict';

var wintersmith = require('wintersmith');

// create the sites environment, can also be called with a config object. e.g.
// {contents: '/some/contents', locals: {powerLevel: 10}}, ..}
var env = wintersmith('./config.json');

env.config.port = process.env.port || env.config.port;

// build site
env.build(function(error) {
	if (error) {
		console.log('build step error ' + error);
		console.log('port ' + process.env.port || 1337);
		throw error;
	}

	console.log('Done!');
});

// preview
env.preview(function(error, server) {
	if (error) {
		console.log('preview step error ' + error);
		console.log('port ' + process.env.port || 1337);
		throw error;
	}

	console.log('Server running!');
});

// do something with the content tree
env.load(function(error, result) {
	if (error) {
		console.log('load step error ' + error);
		console.log('port ' + process.env.port || 1337);
		throw error;
	}

	console.log('Contents loaded!');
});	
