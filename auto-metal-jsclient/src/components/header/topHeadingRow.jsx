import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Media, Col, Grid, Row } from 'react-bootstrap'

const brand = {
    color: "#fff"
}

const rightMenu = {
    paddingBottom: "0px",
}

const TopHeadingRow = () => (
    <Grid>
        <Row>
            { 
                1 === 1 
                        ?
                            <Col xs={4} md={8} className="text-left">
                                <h2><strong><NavLink style={brand} to="/"><img src="/assets/metal-hand-icon-2-1.png" /> MetalHead</NavLink></strong></h2>
                            </Col>
                        :
                            <div>    
                                <Col xs={4} md={8} className="text-left">
                                    <h2><strong><NavLink style={brand} to="/"><img src="/assets/metal-hand-icon-2-1.png" /> MetalHead</NavLink></strong></h2>
                                </Col>
                                <Col xsHidden={0} xsOffset={9} style={rightMenu}> 
                                    <Link to="/profile/"><Button style={style} bsSize="large" active>Profile</Button></Link>
                                    <Link to="/profile/"><img width={64} height={64} src="/assets/default_face_image.jpeg" alt="Image"/></Link>
                                </Col>
                            </div>
            }
        </Row>
    </Grid>
)

const style = {
    marginRight: '5px'
}

export default TopHeadingRow