import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class UserProfileSubNav extends Component {
    state = {  }
    render() {
        return (
            <Navbar>
                <Nav pullRight>
                    { !localStorage["spotify_token"]
                        ?   
                            <NavItem 
                                eventKey={1}
                                href="http://localhost:3000/auth/spotify?show_dialog=true"
                                >Connect Spotify
                            </NavItem>
                        : <div></div>
                    }
                    <NavItem eventKey={2}><NavLink to="/profile">Listening History</NavLink></NavItem>
                    <NavItem eventKey={3}><NavLink to="/profile/about">About</NavLink></NavItem>
                    <NavItem eventKey={4}><NavLink to="/profile/bands">Bands</NavLink></NavItem>
                    <NavItem eventKey={5}><NavLink to="/profile/tracks">Tracks</NavLink></NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default UserProfileSubNav