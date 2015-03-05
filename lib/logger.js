var colors = require('colors');
var prefix = colors.blue.bold("UglifyJS Middleware ");
var debug = false;

function log(msg) {
	if (debug) {
		console.log(msg);
	}
};

exports.info = function(msg) {
	log(prefix + colors.green('[INFO] ') + msg);
};

exports.warning = function(msg) {
	log(prefix + colors.yellow('[WARNING] ') + msg);
}

exports.error = function(msg) {
	log(prefix + colors.red('[ERROR] ') + msg);
};

exports.enableDebug = function() {
	debug = true;
};
