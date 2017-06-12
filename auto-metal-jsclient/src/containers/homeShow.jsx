import React from 'react'
import HomeSearchBar from '../components/home/homeSearchBar'
import { Grid, Row, Col, Form, ControlLabel, FormControl, FormGroup, Button, PageHeader } from 'react-bootstrap'

const HomeShow = () => {
    return (
        <div>
            <div>
                <h1>HOME SHOW (LOGGED IN)</h1>
                <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
                <HomeSearchBar/>
            </div>
            <div>
                <h1>HOME SHOW (LOGGED OUT)</h1>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6} mdPush={6}>
                            <div className="text-left" align="top">
                                <h1>Sign Up \m/</h1>
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
                                        <Button type="submit">
                                            Create Account
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={6} mdPull={6}>
                                <h2 className="text-left" align="top">Connect with metal heads from around the world, listen with, share, and discuss, your favorite tracks.</h2>
                                <ul className="text-left">
                                    <li><strong>See latest releases</strong> from record labels in News Feed.</li>
                                    <li><strong>Share what you listen to</strong> in your profile on your Listening History.</li>
                                    <li><strong>Discover new bands and tracks</strong> you like with Metal Search.</li>
                                </ul>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </div>
    )
}

export default HomeShow