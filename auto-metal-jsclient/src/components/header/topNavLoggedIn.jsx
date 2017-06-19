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
                                <img alt="metal hand logo" src="/assets/long-beard-2-1.png"/> <span className="logo">MusicHead</span>
                            </NavLink>
                        </strong>
                    </h2>
                </Col>
                <ButtonToolbar className="profile-buttons">
                    <Button className="log-out-button" bsSize="lg" onClick={this.props.logUserOut}>Log Out</Button>
                    <Link to="/profile/"><Button bsStyle="primary" bsSize="large" className="profile-link-button">Profile</Button></Link>
                    <Link to="/profile/"><img className="topnav-profile-img" width={64} height={64} src={localStorage["profile_image"]} alt="face"/></Link>
                    {/*<span>Hi, {localStorage['name']}!</span>*/}
                </ButtonToolbar>
                <ButtonGroup bsSize="lg" className="loggedInMenu" justified>
                    {/*<Button bsStyle="primary" href="#" type="button"><Link to="/">FEED</Link></Button>*/}
                    <Button bsStyle="primary" href="#" type="button"><Link to="/artist"><strong>ARTIST</strong></Link></Button>
                    <Button bsStyle="primary" href="#" type="button"><Link to="/album"><strong>ALBUM</strong></Link></Button>
                    <Button bsStyle="primary" href="#" type="button"><Link to="/track"><strong>TRACK</strong></Link></Button>
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