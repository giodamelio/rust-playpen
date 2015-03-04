var React = require("react");

var {
    Navbar,
    Nav,
    DropdownButton,
    MenuItem,
    ButtonGroup,
    Button
} = require("react-bootstrap");

var Store = require("../store");
var Actions = require("../actions");

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
                        <DropdownButton
                            className="navbar-btn"
                            title="Settings">
                        </DropdownButton>
                    </ButtonGroup>
                </Nav>
            </Navbar>
        );
    }
});

