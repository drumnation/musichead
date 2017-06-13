import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row } from 'react-bootstrap'
import TopNavLoggedIn from '../components/header/topNavLoggedIn'
import TopNavLoggedOut from '../components/header/topNavLoggedOut'

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.loggedIn
                        ?
                            <div><TopNavLoggedIn /></div>
                        :
                            <div><TopNavLoggedOut /></div>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return { ...ownProps, loggedIn: state.auth.loggedIn}
}

export default connect(mapStateToProps)(Header)