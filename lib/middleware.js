var logger = require('./log').logger,
    logConf = require('./log').configure,
    uglify = require("uglify-js"),
    fsys = require("./filesystem"),
    url = require("url");

module.exports = function(options) {
  var src, debug = options.debug;
  if (debug) {
      logConf(debug);
  }
  var maxAge = options.maxAge || 86400000; // default to 1 day

  if(options.hasOwnProperty("src")) {
    src = options.src;
  } else {
    throw new Error("Uglify JS middleware requires a 'src' directory");
  }

  return function(req, res, next) {
    var path = url.parse(req.url).pathname;
    if(path.match(/\.js$/) && !path.match(/min/)) {
      fsys.getFile(src+path,
        function(data, isCached) {
          if(data === null) {
            logger.log('info', '"GET ' + path + '" 404');
            res.status(404).send("file not found");
          } else {
            if(!isCached) {
              var ast;
              try {
                ast = uglify.parser.parse(data, true);
                ast = uglify.uglify.ast_mangle(ast);
                ast = uglify.uglify.ast_squeeze(ast);
                ast = uglify.uglify.gen_code(ast);
              } catch (x) {
                logger.log('error', path + ' ' + x);
              }

              if(ast) {
                // Cache the file so we don't have to do it again.
                fsys.writeFile(src+path, ast,
                  function() {
                    logger.log('debug', 'Cached uglified: '+path);
                  });
                logger.log('info', '"GET ' + path + '" 200 - Minified');
                res.setHeader('Content-Type', 'text/javascript');
                res.status(200).send(200);
              } else {
                logger.log('warning', '"GET ' + path + '" 200 - Failed to Minify');
                res.setHeader('Content-Type', 'text/javascript');
                res.status(200).send(data);
              }
            } else {
              logger.log('info', '"GET ' + path + '" 200 - Cached');
              res.setHeader('Expires', new Date(Date.now() + maxAge).toUTCString());
              res.setHeader('Cache-Control', 'public, max-age=' + (maxAge / 1000));
              res.setHeader('Content-Type', 'text/javascript');
              res.status(200).send(data);
            }
          }
        });
    } else {
      next();
    }

  };

};