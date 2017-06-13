import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Media, Col, Grid, Row } from 'react-bootstrap'
import Logo from './logo'



class TopHeadingRow extends Component {
    state = {  }
    render() {
        return (
            <Grid>
                <Row>
                    { 
                        this.props.loggedIn === false 
                            ?
                                <Logo/>
                            :
                                <div>    
                                    <Logo/>
                                    <Col xsHidden={0} xsOffset={9} style={rightMenu}> 
                                        <Link to="/profile/"><Button bsSize="large" active>Profile</Button></Link>
                                        <Link to="/profile/"><img width={64} height={64} src="/assets/default_face_image.jpeg" alt="Image"/></Link>
                                    </Col>
                                </div>
                    }
                </Row>
            </Grid>
        )
    }
}

const rightMenu = {
    paddingBottom: "0px",
}

export default TopHeadingRow