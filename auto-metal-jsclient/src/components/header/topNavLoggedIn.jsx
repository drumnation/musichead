import React, { Component } from 'react'
import { ButtonGroup, MenuItem, Nav, Navbar, NavItem, FormGroup, FormControl, Button, Form, ControlLabel  } from 'react-bootstrap'
import '../../App.css'

class TopNavLoggedIn extends Component {
    state = {  }
    render() {
        return (
            <ButtonGroup justified>
                <Button bsStyle="primary" href="#">ARTIST</Button>
                <Button bsStyle="primary" href="#">LABEL</Button>
                <Button bsStyle="primary" href="#">ALBUM</Button>
                <Button bsStyle="primary" href="#">TRACK</Button>
            </ButtonGroup>
        )
    }
}

export default TopNavLoggedIn