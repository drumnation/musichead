import React, { Component } from 'react'
import { 
    Nav, 
    Navbar, 
    FormGroup, 
    FormControl, 
    Button, 
    Form 
} from 'react-bootstrap'
import '../../App.css'

const inlineForm = {
    marginTop: "6px",
    paddingRight: "90px"
}

class TopNavNotLoggedIn extends Component {
    render() {
        return (
            <Navbar inverse>
                <Nav pullRight> 
                    <Form inline style={inlineForm}>
                        <FormGroup controlId="formInlineEmail">
                            {' '}
                            <FormControl type="email" placeholder="Email" />
                        </FormGroup>
                            {' '}
                        <FormGroup controlId="formInlinePassword">
                            {' '}
                            <FormControl type="password" placeholder="Password" />
                        </FormGroup>
                            {' '}
                        <Button bsStyle="primary" type="submit">Log in</Button>
                    </Form>
                </Nav>
            </Navbar>
        )
    }   
}

export default TopNavNotLoggedIn