var React = require("react");

var Store = require("../store");

module.exports = React.createClass({
    contextTypes: {
        store: React.PropTypes.object.isRequired,
    },
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
        this.setState({
            editor: ace.edit(element)
        });

        // Set it to rust mode
        this.state.editor.getSession().setMode("ace/mode/rust");

        // Set the theme
        this.setTheme();
    },
    componentDidUpdate() {
        this.setTheme();
    },
    setTheme() {
        // Set the theme from the settings
        var themepath = this
            .context.store.select("settings", "theme", "theme").get();
        this.state.editor.setTheme(themepath);
    }
});

