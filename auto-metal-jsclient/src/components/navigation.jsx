import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import '../App.css'

class Navigation extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">metal-head</a>
                    </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Artists</NavItem>
                        <NavItem eventKey={2} href="#">Albums</NavItem>
                        <NavItem eventKey={3} href="#">Labels</NavItem>
                        <NavItem eventKey={4} href="#">Tracks</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation