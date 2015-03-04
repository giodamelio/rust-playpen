var React = require("react");

var HelloWorld = React.createClass({
    render: function() {
        return <h1>Hello World</h1>;
    }
});

document.addEventListener("DOMContentLoaded", function(event) { 
    React.render(
        <HelloWorld />,
        document.body
    );
});

