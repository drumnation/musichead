import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import { Nav, Navbar, MenuItem, NavDropdown, NavItem } from 'react-bootstrap'
import UserListeningHistory from './userListeningHistory'

class UserProfileHeader extends Component {
    state = {  }
    render() {
        return (
            <div class="image-group">
                <img src="/assets/mastodon-cover.jpg" className="cover-image" />
                <Navbar>
                    <Nav pullRight>
                        <NavItem eventKey={1}><NavLink to="/profile">Listening History</NavLink></NavItem>
                        <NavItem eventKey={2}><NavLink to="/profile/about">About</NavLink></NavItem>
                        <NavItem eventKey={2}><NavLink to="/profile/bands">Bands</NavLink></NavItem>
                        <NavItem eventKey={2}><NavLink to="/profile/tracks">Tracks</NavLink></NavItem>
                    </Nav>
                </Navbar>
                <div className="profile-image-group">
                    <img src="/assets/default_face_image.jpeg" className="profile-image" />
                    <label for="image-checkbox" className="image-overlay">
                        <i className="fa fa-camera"></i>
                    </label>
                </div>
            </div>
        )
    }
}

export default UserProfileHeader