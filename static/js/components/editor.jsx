var React = require("react");

var Store = require("../store");

module.exports = React.createClass({
    mixins: [Store.mixin],
    cursor: ["settings"],
    render() {
        console.log();
        var style = {
            position: "absolute",
            width: "100%",
            height: "calc(100% - 50px)",
            top: "50px"
        };
        return <div id="editor" style={style}></div>;
    },
    componentDidMount() {
        var element = this.getDOMNode();
        
        // Create our ace editor
        var editor = ace.edit(element);

        // Set it to rust mode
        editor.getSession().setMode("ace/mode/rust");

        // Set the theme from the settings
        var themepath = this.cursor.select("theme", "theme").get();
        editor.setTheme(themepath);

        // Get a list of all the ace themes
        var themelist = ace.require("ace/ext/themelist");
    }
});

