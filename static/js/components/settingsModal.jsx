var React = require("react");

var {
    Modal,
    Button,
    Input
} = require("react-bootstrap");

var Store = require("../store");
var Actions = require("../actions");

module.exports = React.createClass({
    mixins: [Store.mixin],
    cursors: {
        theme: ["settings", "theme"]
    },
    render() {
        return (
            <Modal {...this.props} bsStyle="primary" title="Settings">
                <div className="modal-body">
                    <form>
                        <Input
                            type="select"
                            ref="themeSelector"
                            label="Theme"
                            defaultValue={this.getCurrentTheme()}
                            onChange={this.setTheme}>
                            {this.listThemes()}
                        </Input>
                    </form>
                </div>
                <div className="modal-footer">
                    <Button onClick={this.props.onRequestHide}>Close</Button>
                </div>
            </Modal>
        );
    },
    listThemes() {
        // Get a list of all the ace themes
        var themelist = ace.require("ace/ext/themelist");

        var themes = [];
        for (var i = 0; i < themelist.themes.length; i++) {
            var theme = themelist.themes[i];
            themes.push(
                <option value={theme.name} key={i}>
                    {theme.caption}
                </option>
            );
        }

        return themes;
    },
    getCurrentTheme() {
        return this.cursors.theme.select("name").get();
    },
    setTheme(event) {
        // Get new theme
        var newThemeName = this.refs.themeSelector.getValue();

        // Get a list of all the ace themes
        var themelist = ace.require("ace/ext/themelist");

        // Send new theme to the store
        Actions.setTheme(themelist.themesByName[newThemeName]);
    }
});

