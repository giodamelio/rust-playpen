var React = require("react");

var {Button} = require("react-bootstrap");

var HelloWorld = React.createClass({
    render: function() {
        return <Button>Hello World</Button>;
    }
});

document.addEventListener("DOMContentLoaded", function(event) { 
    React.render(
        <HelloWorld />,
        document.body
    );
});

