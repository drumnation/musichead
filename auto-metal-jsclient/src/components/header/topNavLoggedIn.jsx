import React, { Component } from 'react'
import { Link, NavLink, Switch, Route } from 'react-router-dom'
import { ButtonGroup, ButtonToolbar, Button, Row, Col } from 'react-bootstrap'
import connectedWithRoutes from '../../hocs/connectedWithRoutes'
import { logOut } from '../../actions/authActions'
import { fetchUser } from '../../api/railsApi'
import '../../App.css'
import './style.css'

class TopNavLoggedIn extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            userImage: ''
        }
    }

    componentDidMount() {
        fetchUser(localStorage["user_id"])
            .then(user => this.setState({userName: user.name, userImage: user.image}))
        console.log('state', this.state)
    }

    render() {
        return (
            <Row>
                <Col xs={4} md={8} className="text-left">
                    <h2>
                        <strong>
                            <NavLink className="brand" to="/">
                                <img alt="metal hand logo" src="/assets/metal-hand-icon-2-1.png" /> <span className="logo">MetalHead</span>
                            </NavLink>
                        </strong>
                    </h2>
                </Col>
                <ButtonToolbar className="profile-buttons">
                    <Button bsSize="lg" onClick={this.props.logUserOut}>Log Out</Button>
                    <Link to="/profile/"><Button bsStyle="primary" bsSize="large">Profile</Button></Link>
                    <Link to="/profile/"><img className="topnav-profile-img" width={64} height={64} src={localStorage["profile_image"]} alt="face"/></Link>
                    <Switch>
                        <Route path="/profile">
                            <Button 
                                bsStyle="success" 
                                bsSize="lg"
                                href="http://localhost:3000/auth/spotify?show_dialog=true"
                            >
                                Connect Spotify
                            </Button>
                        </Route>
                    </Switch>
                </ButtonToolbar>
                <ButtonGroup bsSize="lg" className="loggedInMenu" justified>
                    <Button bsStyle="primary" href="#" type="button"><Link to="/artist">ARTIST</Link></Button>
                    <Button bsStyle="primary" href="#" type="button"><Link to="/label">LABEL</Link></Button>
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