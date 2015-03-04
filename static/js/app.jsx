var React = require("react");

var Nav = require("./components/nav.jsx");
var Editor = require("./components/editor.jsx");

module.exports = React.createClass({
    render() {
        return <div>
            <Nav />
            <Editor />
        </div>;
    }
});

