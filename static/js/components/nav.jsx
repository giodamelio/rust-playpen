var React = require("react");

var {Navbar, Nav, NavItem, DropdownButton, MenuItem} = require("react-bootstrap");

var Store = require("../store");

module.exports = React.createClass({
    mixins: [Store.mixin],
    cursor: "users",
    renderUsername(username, index) {
        return <MenuItem eventKey={index}>{username}</MenuItem>;
    },
    render() {
        return (
            <Navbar brand="Rust Playpen" inverse>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <DropdownButton eventKey={3} title="Dropdown">
                        {this.cursor.get().map(this.renderUsername)}
                    </DropdownButton>
                </Nav>
            </Navbar>
        );
    }
});

