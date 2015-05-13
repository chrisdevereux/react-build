'use strict';

var React = require('react');

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
