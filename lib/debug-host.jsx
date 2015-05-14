'use strict';

var React = require('react');
var Root = require('react-pack-debug-root-component');
var params = require('query-params');

window.onload = () => {
  document.title = __react_build.moduleName + ' | react-build';
  React.render(
    (
      <Root {...getProps()}/>
    ),
    document.body
  );
};

function getProps() {
  var propString = decodeURI(window.location.search.replace(/^\?/, ''));
  var paramMap = params.decode(propString);

  var props = {};
  for (var key in paramMap) {
    if (paramMap.hasOwnProperty(key)) {
      props[key] = getParam(paramMap[key]);
    }
  }

  return props;
}

function getParam(str) {
  try {
    return JSON.parse(str);

  } catch(error) {
    return str;
  }
}
