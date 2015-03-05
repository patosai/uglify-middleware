# UglifyJS Middleware #

## About ##
This middleware uses UglifyJS to provide easy JavaScript file minification and, well, uglification.

## Usage ##
Using this middleware is as easy as one line.

    app.use(require('uglify-middleware').middleware({ src: __dirname + '/public' });


## Options ##

** Required **
  * `src`: defines the source directory

** Optional
  * `debug`: enables debugging logging; default = `false`; options = `true`, `false`

## License ##

Copyright (c) 2015, Patrick Tsai &lt;penguin@patosai.com&gt;

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
