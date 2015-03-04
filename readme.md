# UglifyJS Middleware #

## About ##
This package is designed to provide a middleware solution for on the fly compression of JavaScript files. Code for embedding stays identical so switching between development and production states is as simple as changing the config for express.

## Usage ##
Using this middleware is as easy as one line.

    app.use(require('uglify-middleware').middleware({ src: __dirname + '/public' });


## Options ##

`src`: defines the source directory
`debug`: enables debugging logging

## License ##

Copyright (c) 2015, Patrick Tsai <penguin@patosai.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.