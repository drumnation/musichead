import React, { Component } from 'react'
import { 
    Grid, 
    Row, 
    Col, 
    Form, 
    FormControl,
    FormGroup, 
    Button, 
    Glyphicon 
} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { fetchSignUp} from '../../actions/signupActions'
import connectedWithRoutes from '../../hocs/connectedWithRoutes'
// import FacebookLogin from 'react-facebook-login'

const features = {
    fontSize: "18px"
}

const tombstone = {
    height: "40px",
    width: "40px"
}

const submitButton = {
    marginTop: "10px"
}

// const responseFacebook = (response) => {
//     console.log(response);
// }

class HomeLoggedOut extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.signUp(this.state, this.props.history)
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}>
                        
                            <div className="text-left">
                                <h1>
                                    Sign Up <img src="/assets/cemetary-3-1.png" style={tombstone} alt="tombstone"/>
                                </h1>
                                <h4>It will only cost your <i>soul...</i></h4>
                                <br/>
                            </div>    

                            <Form onSubmit={this.handleSubmit.bind(this) } horizontal>
                                <FormGroup controlId="formHorizontalUsername">
                                    <Col sm={10}>
                                        <FormControl 
                                            type="text" 
                                            placeholder="Name" 
                                            value={this.state.name} 
                                            onChange={ event => this.setState({ name: event.target.value }) } 
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalEmail">
                                    <Col sm={10}>
                                        <FormControl
                                            type="email" 
                                            placeholder="Email"
                                            value={this.state.email} 
                                            onChange={(event) => this.setState({email: event.target.value})} 
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col sm={10}>
                                        <FormControl
                                            type="password" 
                                            placeholder="Password"
                                            value={this.state.password} 
                                            onChange={(event) => this.setState({password: event.target.value})}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPasswordConfirmation">
                                    <Col sm={10}>
                                        <FormControl
                                            type="password" 
                                            placeholder="Password Confirmation"
                                            value={this.state.password_confirmation} 
                                            onChange={(event) => this.setState({password_confirmation: event.target.value})} 
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col md={3}>
                                        <Button bsStyle="danger" bsSize="large" type="submit" style={submitButton}>
                                            Create Account
                                        </Button>
                                        {/*<FacebookLogin
                                            appId="306729159767109"
                                            autoLoad={true}
                                            fields="name,email,picture"
                                            callback={responseFacebook} 
                                        />*/}
                                    </Col>
                                </FormGroup>

                            </Form>
                        </Col>
                        <Col md={6} mdPull={6}>
                            <h2 className="text-left">Connect with metal heads from around the world to watch, listen, and share your favorite tracks.</h2>
                            <br/>
                            <div className="text-left">
                                <p style={features}><Glyphicon glyph="cd" /> <strong>See latest releases</strong> from record labels in News Feed.</p>
                                <p style={features}><Glyphicon glyph="headphones" /> <strong>Share your listener footprint</strong> with Listening History.</p>
                                <p style={features}><Glyphicon glyph="search" /> <strong>Discover new tracks</strong> to save using Metal Search.</p>
                            </div>
                            <br/>
                            <img src="/assets/spotify-1-2.png" alt="powered by spotify"/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return ownProps
}

function mapDispatchToProps(dispatch, ownProps) {
    return { 
        signUp: (state, history) => dispatch(fetchSignUp(state, history))
    }
}

export default connectedWithRoutes(mapStateToProps, mapDispatchToProps)(HomeLoggedOut)
            