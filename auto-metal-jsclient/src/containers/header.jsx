import React, { Component } from 'react'
import { connect } from 'react-redux'
import TopNavLoggedIn from '../components/header/topNavLoggedIn'
import TopNavLoggedOut from '../components/header/topNavLoggedOut'

class Header extends Component {
    render() {
        return (
            <div>
                {
                    this.props.loggedIn
                        ? <TopNavLoggedIn />
                        : <TopNavLoggedOut />
                }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return { ...ownProps, loggedIn: state.auth.loggedIn}
}

export default connect(mapStateToProps)(Header)