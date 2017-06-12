import React, { Component } from 'react'
import { Nav, Navbar, NavItem, FormGroup, FormControl, Button, Form, ControlLabel  } from 'react-bootstrap'
import '../../App.css'

class TopNav extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#"><strong>TOPNAV (LOGGED IN)</strong></a>
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
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">TOPNAV (LOGGED OUT)</a>
                        </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Navbar.Form pullRight>
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
                                <FormGroup controlId="formInlineSubmit">
                                    <Button bsStyle="primary" type="submit">
                                        Login
                                    </Button>
                                </FormGroup>
                            </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
        //         1 === 1 
        //             ? 
        //                 <Navbar inverse collapseOnSelect>
        //                     <Navbar.Header>
        //                         <Navbar.Brand>
        //                             <a href="#"><strong>NAV BAR</strong></a>
        //                         </Navbar.Brand>
        //                             <Navbar.Toggle />
        //                         </Navbar.Header>
        //                         <Navbar.Collapse>
        //                         <Nav>
        //                             <NavItem eventKey={1} href="#">Artists</NavItem>
        //                             <NavItem eventKey={2} href="#">Albums</NavItem>
        //                             <NavItem eventKey={3} href="#">Labels</NavItem>
        //                             <NavItem eventKey={4} href="#">Tracks</NavItem>
        //                         </Nav>
        //                     </Navbar.Collapse>
        //                 </Navbar>
        //             :
        //                 <Navbar inverse collapseOnSelect>
        //                     <Navbar.Header>
        //                         <Navbar.Brand>
        //                             <a href="#">metalhead.fm</a>
        //                         </Navbar.Brand>
        //                             <Navbar.Toggle />
        //                         </Navbar.Header>
        //                         <Navbar.Collapse>
        //                         <Form inline>
        //                             <FormGroup controlId="formInlineName">
        //                                 <ControlLabel>Name</ControlLabel>
        //                                 {' '}
        //                                 <FormControl type="text" placeholder="Jane Doe" />
        //                             </FormGroup>
        //                             {' '}
        //                             <FormGroup controlId="formInlineEmail">
        //                             <ControlLabel>Email</ControlLabel>
        //                             {' '}
        //                             <FormControl type="email" placeholder="jane.doe@example.com" />
        //                             </FormGroup>
        //                             {' '}
        //                             <Button type="submit">
        //                                 Send invitation
        //                             </Button>
        //                         </Form>
        //                     </Navbar.Collapse>
        //                 </Navbar>
        // )
    }   
}

export default TopNav