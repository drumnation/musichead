import React, { Component } from 'react'
import UserInfo from '../components/user/userInfo'

class UserShow extends Component {
    state = {  }
    render() {
        return (
            <div>
                <h1>USER SHOW</h1>
                <UserInfo />
            </div>
        )
    }
}

export default UserShow