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
                    <Form inline style={inlineForm} onSubmit={ event => this.props.handleLogin(event) }>
                        <FormGroup controlId="formInlineEmail">
                            {' '}
                            <FormControl value={this.state.email} type="email" placeholder="Email" onChange={(event) => this.setState({email: event.target.value})}/>
                        </FormGroup>
                            {' '}
                        <FormGroup controlId="formInlinePassword">
                            {' '}
                            <FormControl value={this.state.password} type="password" placeholder="Password" onChange={(event) => this.setState({password: event.target.value})}/>
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