import React, { Component } from 'react'
import { Nav, Navbar, NavItem, FormGroup, FormControl, Button, Form, ControlLabel  } from 'react-bootstrap'
import '../../App.css'

class TopNav extends Component {
    render() {
        return (
                1 === 1 
                    ? 
                        <Navbar inverse collapseOnSelect>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="#"><strong>NAV BAR</strong></a>
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
                    :
                        <Navbar inverse collapseOnSelect>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="#">metalhead.fm</a>
                                </Navbar.Brand>
                                    <Navbar.Toggle />
                                </Navbar.Header>
                                <Navbar.Collapse>
                                <Form inline>
                                    <FormGroup controlId="formInlineName">
                                        <ControlLabel>Name</ControlLabel>
                                        {' '}
                                        <FormControl type="text" placeholder="Jane Doe" />
                                    </FormGroup>
                                    {' '}
                                    <FormGroup controlId="formInlineEmail">
                                    <ControlLabel>Email</ControlLabel>
                                    {' '}
                                    <FormControl type="email" placeholder="jane.doe@example.com" />
                                    </FormGroup>
                                    {' '}
                                    <Button type="submit">
                                        Send invitation
                                    </Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
        )
    }   
}

export default TopNav