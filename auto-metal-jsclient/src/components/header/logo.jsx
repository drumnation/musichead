import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col } from 'react-bootstrap'

const brand = {
    color: "#fff"
}


const Logo = () => (
    <Col xs={4} md={8} className="text-left">
        <h2><strong><NavLink style={brand} to="/"> <img src="/assets/metal-hand-icon-2-1.png" /> MetalHead</NavLink></strong></h2>
    </Col>
)

export default Logo