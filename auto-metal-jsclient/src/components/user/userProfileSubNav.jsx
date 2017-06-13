import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class UserProfileSubNav extends Component {
    state = {  }
    render() {
        return (
            <Navbar>
                <Nav pullRight>
                    <NavItem eventKey={1}><NavLink to="/profile">Listening History</NavLink></NavItem>
                    <NavItem eventKey={2}><NavLink to="/profile/about">About</NavLink></NavItem>
                    <NavItem eventKey={2}><NavLink to="/profile/bands">Bands</NavLink></NavItem>
                    <NavItem eventKey={2}><NavLink to="/profile/tracks">Tracks</NavLink></NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default UserProfileSubNav