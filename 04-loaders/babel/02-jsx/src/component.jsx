var React = require('react');

var Component = React.createClass({
  render: function() {
    var text = 'I am the text';
    return <div className='component'>{text}</div>;
  }
});

module.exports = Component;
