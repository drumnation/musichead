import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { fetchLogIn } from '../../actions/authActions'
import { connect } from 'react-redux'
import { 
    Nav, 
    Navbar, 
    FormGroup, 
    FormControl, 
    Button, 
    Form,
    Grid,
    Row, 
    Col
} from 'react-bootstrap'
import './style.css'
import '../../App.css'

const inlineForm = {
    marginTop: "6px",
    paddingRight: "90px"
}

class TopNavNotLoggedIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleLogin(event) {
        event.preventDefault()
        this.props.login(this.state, this.props.history)
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={4} md={8} className="text-left">
                        <h2>
                            <strong>
                                <Link className="brand" to="/">
                                    <img alt="metal hand logo" src="/assets/long-beard-2-1.png" /> <span className="logo">MusicHead</span>
                                </Link>
                            </strong>
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Navbar inverse>
                        <Nav pullRight> 
                            <Form inline style={inlineForm} onSubmit={ this.handleLogin.bind(this) }>
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
                                <Button className="login-button" bsStyle="primary" type="submit">Log in</Button>
                            </Form>
                        </Nav>
                    </Navbar>
                </Row>
            </Grid>
        )
    }   
}

function mapStateToProps(state, ownProps) {
    return ownProps
}

function mapDispatchToProps(dispatch, ownProps) {
    return { 
        login: (user, history) => dispatch(fetchLogIn(user, history)) 
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopNavNotLoggedIn))