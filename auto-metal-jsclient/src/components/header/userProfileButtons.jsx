import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col } from 'react-bootstrap'

const rightMenu = {
    paddingBottom: "0px",
}

const UserProfileButtons = () => (
    <Col xsHidden={0} xsOffset={9} style={rightMenu}> 
        <Link to="/profile/"><Button bsSize="large" active>Profile</Button></Link>
        <Link to="/profile/"><img width={64} height={64} src="/assets/default_face_image.jpeg" alt="Image"/></Link>
    </Col> 
)

export default UserProfileButtons