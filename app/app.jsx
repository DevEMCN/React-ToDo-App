var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');



// Load foundation

$(document).foundation();

// load css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Starter Kit</p>,
  document.getElementById('app')
);
