var React = require("react");

var {
    Navbar,
    Nav,
    MenuItem,
    ButtonGroup,
    Button,
    Glyphicon,
    ModalTrigger
} = require("react-bootstrap");

var Store = require("../store");
var Actions = require("../actions");

var SettingsModal = require("./settingsModal.jsx");

module.exports = React.createClass({
    mixins: [Store.mixin],
    render() {
        return (
            <Navbar brand="Rust Playpen" inverse>
                <Nav right>
                    <ButtonGroup>
                        <Button
                            onClick={Actions.run}
                            className="navbar-btn">Run</Button>
                        <Button
                            className="navbar-btn">Format</Button>
                        <Button
                            className="navbar-btn">Assembly</Button>
                        <Button
                            className="navbar-btn">LLVM IR</Button>
                        <Button
                            className="navbar-btn">Share</Button>
                        <ModalTrigger modal={<SettingsModal />}>
                            <Button className="navbar-btn">
                                <Glyphicon glyph="cog" /> Settings
                            </Button>
                        </ModalTrigger>
                    </ButtonGroup>
                </Nav>
            </Navbar>
        );
    }
});

