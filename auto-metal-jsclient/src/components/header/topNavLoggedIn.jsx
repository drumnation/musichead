import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ButtonGroup, Button, Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logOut } from '../../actions/authActions'
import '../../App.css'
import './style.css'

class TopNavLoggedIn extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={4} md={8} className="text-left">
                        <h2>
                            <strong>
                                <NavLink className="brand" to="/">
                                <img src="/assets/metal-hand-icon-2-1.png" /> MetalHead</NavLink>
                            </strong>
                        </h2>
                    </Col>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.props.logUserOut()}>Log Out</Button>
                        <Link to="/profile/"><Button bsStyle="primary" bsSize="large" active>Profile</Button></Link>
                        <Link to="/profile/"><img width={64} height={64} src="/assets/default_face_image.jpeg" alt="Image"/></Link>
                    </ButtonGroup>
                </Row>
                <Row>
                    <ButtonGroup className="loggedInMenu" justified>
                        <Button bsStyle="primary" href="#" type="button"><Link to="/artist">ARTIST</Link></Button>
                        <Button bsStyle="primary" href="#" type="button"><Link to="/label">LABEL</Link></Button>
                        <Button bsStyle="primary" href="#" type="button"><Link to="/album">ALBUM</Link></Button>
                        <Button bsStyle="primary" href="#" type="button"><Link to="/track">TRACK</Link></Button>
                    </ButtonGroup>
                </Row>
            </Grid>
        )
    }
}

function mapStateFromProps(state, ownProps) {
    return { ...ownProps, loggedIn: state.auth.loggedIn}
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        logUserOut: (data) => dispatch(logOut())
    }
}

export default connect(mapStateFromProps, mapDispatchToProps)(TopNavLoggedIn)