# UglifyJS Middleware #
[![Build Status](https://travis-ci.org/patosai/uglify-middleware.svg)](https://travis-ci.org/patosai/uglify-middleware)

## About ##
This middleware uses UglifyJS to provide easy JavaScript file minification and, well, uglification.

It saves uglified .js files to a .cache folder (located where your source is) and automatically updates when the source is changed.

## Usage ##
Using this middleware is as easy as one line.

    app.use(require('uglify-middleware')({ src: __dirname + '/public' });

Or if you'd like,

    var uglifyMiddleware = require('uglify-middleware');
    app.use(uglifyMiddleware({ src: __dirname + '/public' }));

## Options ##

### Required ###
  * `src`: defines the source directory

### Optional ###
  * `debug`: enables debugging logging
    * default: `false`
    * options: `true`, `false`
  * `maxAge`: set maximum age of HTTP cache (in seconds)
    * default: `86400` or 1 day

## License ##

The MIT License (MIT)

Copyright &copy; 2015 Patrick Tsai &lt;penguin@patosai.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
