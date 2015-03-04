var React = require("react");
var ace = require("brace");

module.exports = React.createClass({
    render() {
        var style = {
            position: "absolute",
            width: "100%",
            height: (window.innerHeight - 50) + "px",
            top: "50px"
        };
        return <div id="editor" style={style}></div>;
    },
    componentDidMount() {
        var element = this.getDOMNode();
        
        // Create our ace editor
        ace.edit(element);
    }
});

