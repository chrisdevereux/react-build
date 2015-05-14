'use strict';

var React = require('react');
require('./style.less');
require('./style.css');

var Test = React.createClass({
  getDefaultProps: function() {
    return {what: 'world'};
  },

  render: function() {
    return (
      <div>Hello, {this.props.what}!</div>
    );
  }
});
module.exports = Test;
