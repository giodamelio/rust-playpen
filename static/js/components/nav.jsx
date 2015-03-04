var React = require("react");

var {Navbar, Nav, NavItem, DropdownButton, MenuItem} = require("react-bootstrap");

module.exports = React.createClass({
    render() {
        return (
            <Navbar brand="Rust Playpen" inverse>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <DropdownButton eventKey={3} title="Dropdown">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </DropdownButton>
                </Nav>
            </Navbar>
        );
    }
});

