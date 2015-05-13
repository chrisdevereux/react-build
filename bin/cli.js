#!/usr/bin/env node

'use strict';

var path = require('path');

var cliArgs = require('command-line-args');
var webpack = require('webpack');
var DevServer = require('webpack-dev-server');

var debugConf = require('../lib/debug');
var util = require('../lib/util');


/**
  Configure
*/

var cli = cliArgs([
  {name: 'port', type: Boolean, alias: 'p'},
  {name: 'dist', type: Boolean, alias: 'd'},
  {name: 'verbose', type: Boolean, alias: 'v'},
  {name: 'file', type: String, alias: 'f'}
]);

var opts = cli.parse();
if (!opts.port) {
  opts.port = 8080;
}
if (!opts.dist) {
  opts.dist = false;
}
if (!opts.file) {
  opts.file = 'index';
}

util.logv.enabled = opts.verbose;

var filename = util.tryExtensions(opts.file, ['.js', '.jsx', '']);


/**
  Run
*/

if (opts.package) {
  throw new Error('not implemented');

} else {
  var config = debugConf(filename);
  util.logv('using webpack config:', config);

  var serverConfig = {
    hot: true,
    contentBase: config.output.path,
    noInfo: !opts.verbose,
    historyApiFallback: true
  };

  util.logv('devserver config:', serverConfig);
  var server = new DevServer(webpack(config), serverConfig);

  server.listen(opts.port, '0.0.0.0', function() {
    console.log('Development server started on port ' + opts.port);
  });
}
