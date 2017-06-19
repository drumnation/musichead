import React, { Component } from 'react'
import { Nav, Navbar, ButtonGroup, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './style.css'

class UserProfileSubNav extends Component {
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
                                ><img width={32} height={32} src='/assets/spotify-icon-25.png' alt="spotify icon"/>
                                    <span className="spotify-button-text">
                                        Connect Spotify
                                    </span>
                            </Button>
                        : <div></div>
                    }
                    <ButtonGroup>
                        <Button className="sub-menu-buttons" eventKey={2}><NavLink to="/profile">Listening History</NavLink></Button>
                        <Button className="sub-menu-buttons" eventKey={3}><NavLink to="/profile/bands">Bands</NavLink></Button>
                        <Button className="sub-menu-buttons" eventKey={5}><NavLink to="/profile/tracks">Tracks</NavLink></Button>
                    </ButtonGroup>
                </Nav>
            </Navbar>
        )
    }
}

export default UserProfileSubNav