import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ButtonGroup, Button } from 'react-bootstrap'
import '../../App.css'
import './style.css'

class TopNavLoggedIn extends Component {
    state = {  }
    render() {
        return (
            <ButtonGroup className="loggedInMenu" justified>
                <Button bsStyle="primary" href="#" type="button"></Button>
                <Button bsStyle="primary" href="#" type="button"><Link to="/label">LABEL</Link></Button>
                <Button bsStyle="primary" href="#" type="button"><Link to="/album">ALBUM</Link></Button>
                <Button bsStyle="primary" href="#" type="button"><Link to="/track">TRACK</Link></Button>
            </ButtonGroup>
        )
    }
}

export default TopNavLoggedIn