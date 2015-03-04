var React = require("react");

var App = require("./app.jsx");
var Store = require("./store");

var ContextWrapper = React.createClass({
    childContextTypes: {
         store: React.PropTypes.object.isRequired
    },
    getChildContext: function() {
        return {
            store: Store
        };
    },
    render() {
        return <App />;
    }
});

var renderApp = function() {
    React.render(
        <ContextWrapper />,
        document.body
    );
};

document.addEventListener("DOMContentLoaded", function(event) {
    store.on("update", function() {
        renderApp();
    });
    renderApp();
});

