import React, { Component } from 'react'
import UserProfileHeader from '../components/user/userProfileHeader'
import UserInfo from '../components/user/userInfo'


class UserShow extends Component {
    state = {  }
    render() {
        return (
            <div>
                <h1>USER SHOW</h1>
                <UserProfileHeader />
                <UserInfo />
            </div>
        )
    }
}

export default UserShow