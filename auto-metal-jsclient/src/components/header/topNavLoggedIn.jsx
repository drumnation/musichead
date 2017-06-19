import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ButtonGroup, ButtonToolbar, Button, Row, Col } from 'react-bootstrap'
import connectedWithRoutes from '../../hocs/connectedWithRoutes'
import { logOut } from '../../actions/authActions'
import '../../App.css'
import './style.css'

class TopNavLoggedIn extends Component {
    render() {
        return (
            <Row>
                <Col xs={4} md={8} className="text-left">
                    <h2>
                        <strong>
                            <NavLink className="brand" to="/">
                                <img alt="metal hand logo" src="/assets/metal-hand-icon-2-1.png" /> <span className="logo">MusicHead</span>
                            </NavLink>
                        </strong>
                    </h2>
                </Col>
                <ButtonToolbar className="profile-buttons">
                    <Button bsSize="lg" onClick={this.props.logUserOut}>Log Out</Button>
                    <Link to="/profile/"><Button bsStyle="primary" bsSize="large">Profile</Button></Link>
                    <Link to="/profile/"><img className="topnav-profile-img" width={64} height={64} src={localStorage["profile_image"]} alt="face"/></Link>
                    {/*<span>Hi, {localStorage['name']}!</span>*/}
                </ButtonToolbar>
                <ButtonGroup bsSize="lg" className="loggedInMenu" justified>
                    {/*<Button bsStyle="primary" href="#" type="button"><Link to="/">FEED</Link></Button>*/}
                    <Button bsStyle="primary" href="#" type="button"><Link to="/artist">ARTIST</Link></Button>
                    <Button bsStyle="primary" href="#" type="button"><Link to="/album">ALBUM</Link></Button>
                    <Button bsStyle="primary" href="#" type="button"><Link to="/track">TRACK</Link></Button>
                </ButtonGroup>
            </Row>
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

export default connectedWithRoutes(mapStateFromProps, mapDispatchToProps)(TopNavLoggedIn)