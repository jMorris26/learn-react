var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;


/**Components*/
var Index = require('./components/index');


var AppRouter = React.createClass({
    render: function() {
        return (
            <Router history={browserHistory}>
                <Route path="/">
                    <IndexRoute component={Index}/>
                </Route>
            </Router>
        )
    }
});

module.exports = AppRouter;
