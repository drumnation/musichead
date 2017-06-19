import React, { Component } from 'react'
import { Nav, Navbar, NavItem, ButtonGroup, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../../App.css'

class UserProfileSubNav extends Component {
    state = {  }
    render() {
        return (
            <Navbar>
                <Nav pullRight>
                    { localStorage["spotify_token"] !== ''
                        ?   
                            <Button 
                                eventKey={1}
                                className="spotify-connect-button"
                                bsStyle="success"
                                href="http://localhost:3000/auth/spotify?show_dialog=true"
                                >Connect Spotify
                            </Button>
                        : <div></div>
                    }
                    <ButtonGroup>
                        <Button className="sub-menu-buttons" eventKey={2}><NavLink to="/profile">Listening History</NavLink></Button>
                        <Button className="sub-menu-buttons" eventKey={3}><NavLink to="/profile/bands">Bands</NavLink></Button>
                        <Button className="sub-menu-buttons" eventKey={5}><NavLink to="/profile/tracks">Tracks</NavLink></Button>
                    </ButtonGroup>
                    {/*<NavItem eventKey={3}><NavLink to="/profile/about">About</NavLink></NavItem>*/}
                    {/*<NavItem eventKey={4}><NavLink to="/profile/bands">Bands</NavLink></NavItem>
                    <NavItem eventKey={5}><NavLink to="/profile/tracks">Tracks</NavLink></NavItem>*/}
                </Nav>
            </Navbar>
        )
    }
}

export default UserProfileSubNav