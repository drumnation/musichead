import React from 'react'
import HomeSearchBar from '../components/home/homeSearchBar'
import { Grid, Row, Col, Form, ControlLabel, FormControl, FormGroup, Button, Glyphicon, Image } from 'react-bootstrap'

const HomeShow = () => {
    return (
        <div>
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}>
                            <div className="text-left" align="top">
                                <h1>Sign Up <img src="/assets/cemetary-3-1.png" /></h1>
                                <h4>It will only cost your soul.</h4>
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
                                        <Button bsStyle="danger" bsSize="large" type="submit">
                                            Create Account
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={6} mdPull={6}>
                                <h2 className="text-left" align="top">Connect with metal heads from around the world to listen, share, and discuss your favorite tracks.</h2>
                                <br/>
                                <div className="text-left">
                                    <p><Glyphicon glyph="cd" /> <strong>See latest releases</strong> from record labels in News Feed.</p>
                                    <p><Glyphicon glyph="headphones" /> <strong>Share what you listen to</strong> in your profile on your Listening History.</p>
                                    <p><Glyphicon glyph="search" /> <strong>Discover new bands and tracks</strong> you like with Metal Search.</p>
                                </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    )
}

export default HomeShow