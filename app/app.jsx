var React = require('react'),
    ReactDOM = require('react-dom'),
    { Route, Router, IndexRoute, hashHistory } = require('react-router');;

$(document).foundation();

// app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  /*<Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  */
  <p>Boilerplate</p>,
  document.getElementById('app')
);
