'use strict';

var fs = require('fs');
var path = require('path');

function tryExtensions(file, extensions) {
  if (extensions.length === 0) {
    throw new Error('Not found ' + file);
  }

  try {
    var pathname = path.resolve(file + extensions[0]);
    fs.lstatSync(pathname);

    return pathname;

  } catch (error) {
    return tryExtensions(file, extensions.slice(1));
  }
}
exports.tryExtensions = tryExtensions;


function logv() {
  if (logv.enabled) {
    console.log.apply(this, arguments);
  }
}
exports.logv = logv;
