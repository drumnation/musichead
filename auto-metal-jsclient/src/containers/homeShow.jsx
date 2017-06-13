import React from 'react'
import HomeLoggedIn from '../components/home/homeLoggedIn'
import HomeLoggedOut from '../components/home/homeLoggedOut'
import { connect } from 'react-redux'

const HomeShow = (props) => {
    console.log(props)
    return props.loggedIn ? <HomeLoggedIn/> : <HomeLoggedOut/>
}

function mapStateToProps(state, ownProps) {
    return { ...ownProps, loggedIn: state.auth.loggedIn}
}

export default connect(mapStateToProps)(HomeShow)