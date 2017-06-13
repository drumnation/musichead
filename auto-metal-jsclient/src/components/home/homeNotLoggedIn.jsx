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

class HomeNotLoggedIn extends Component {
    render() {
        return (
            <div>
                <div>
                    <Grid>
                        <Row className="show-grid">
                            <Col md={6} mdPush={6}>
                                <div className="text-left" align="top">
                                    <h1>Sign Up <img src="/assets/cemetary-3-1.png" style={tombstone}/></h1>
                                    <h4>It will only cost your <i>soul...</i></h4>
                                    <br/>
                                </div>    
                                <Form horizontal>
                                    <FormGroup controlId="formHorizontalUsername">
                                        {/*<Col componentClass={ControlLabel} sm={2}>
                                            Name
                                        </Col>*/}
                                        <Col sm={10}>
                                            <FormControl type="email" placeholder="Name" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalEmail">
                                        {/*<Col componentClass={ControlLabel} sm={2}>
                                            Email
                                        </Col>*/}
                                        <Col sm={10}>
                                            <FormControl type="email" placeholder="Email" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">
                                        {/*<Col componentClass={ControlLabel} sm={2}>
                                            Password
                                        </Col>*/}
                                        <Col sm={10}>
                                            <FormControl type="password" placeholder="Password" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPasswordConfirmation">
                                        {/*<Col componentClass={ControlLabel} sm={2}>
                                            Confirmation
                                        </Col>*/}
                                        <Col sm={10}>
                                            <FormControl type="password" placeholder="Password Confirmation" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col md={3}>
                                            <Button bsStyle="danger" bsSize="large" type="submit" style={submitButton}>
                                                Create Account
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col md={6} mdPull={6}>
                                    <h2 className="text-left" align="top">Connect with metal heads from around the world to watch, listen, and share your favorite tracks.</h2>
                                    <br/>
                                    <div className="text-left">
                                        <p style={features}><Glyphicon glyph="cd" /> <strong>See latest releases</strong> from record labels in News Feed.</p>
                                        <p style={features}><Glyphicon glyph="headphones" /> <strong>Share your listener footprint</strong> with Listening History.</p>
                                        <p style={features}><Glyphicon glyph="search" /> <strong>Discover new tracks</strong> to save using Metal Search.</p>
                                    </div>
                                    <br/>
                                    <img src="/assets/spotify-1-2.png"/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default HomeNotLoggedIn
            