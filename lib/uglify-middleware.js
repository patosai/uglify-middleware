var logger = require('./logger'),
    UglifyJS = require("uglify-js"),
    fsys = require("./filesystem"),
    url = require("url");

module.exports = function(options) {
	var src, debug = options.debug;
	if (debug) {
		logger.enableDebug();
	}
	var maxAge = (options.maxAge || 86400) * 1000; // maximum age in seconds

	if (options.hasOwnProperty("src")) {
		src = options.src;
	} else {
		throw new Error("UglifyJS middleware requires a 'src' directory");
	}

	return function(req, res, next) {
		var path = url.parse(req.url).pathname;

		if (!(path.match(/\.js$/) && !path.match(/min/))) {
			return next();
		}

		fsys.getFile(src + path, function(data, isCached) {
			if (data === null) {
				logger.error('"GET ' + path + '" 404');
				res.status(404).send("File not found");
				return;
			}
			if (!isCached) {
				var ast;
				try {
					ast = UglifyJS.minify(data, {
						fromString: true,
						warnings: true,
						mangle: true
					}).code;
				} catch (x) {
					logger.error(path + ' ' + x);
				}
				if (ast) {
					// Cache the file so we don't have to do it again.
					fsys.writeFile(src + path, ast, function() {
						logger.info('Cached uglified: ' + path);
					});
					logger.info('"GET ' + path + '" 200 - Minified');
					res.setHeader('Content-Type', 'text/javascript');
					res.status(200).send(ast);
				} else {
					logger.error('"GET ' + path + '" 200 - Failed to Minify');
					res.setHeader('Content-Type', 'text/javascript');
					res.status(500).send(data);
				}
			} else {
				logger.info('"GET ' + path + '" 200 - Cached');
				res.setHeader('Expires', new Date(Date.now() + maxAge).toUTCString());
				res.setHeader('Cache-Control', 'public, max-age=' + (maxAge / 1000));
				res.setHeader('Content-Type', 'text/javascript');
				res.status(200).send(data);
			}
		});
	};
};
