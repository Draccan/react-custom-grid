var React = require("react");
var Router = require("react-router");

var MainLayout = require("views/mainlayout");

module.exports = (
  <Router.Router history={Router.hashHistory}>
    <Router.Route component={MainLayout} name="MainLayout" path="/">
    </Router.Route>
  </Router.Router>
);