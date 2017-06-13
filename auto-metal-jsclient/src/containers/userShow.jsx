import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import UserProfileHeader from '../components/user/userProfileHeader'
import UserListeningHistory from '../components/user/userListeningHistory'
import UserInfo from '../components/user/userInfo'
import UserFavoriteBands from '../components/user/userFavoriteBands'
import UserFavoriteTracks from '../components/user/userFavoriteTracks'

class UserShow extends Component {
    state = {  }
    render() {
        return (
            <div>
                <UserProfileHeader />
                <Switch>
                    <Route exact path="/profile/" component={UserListeningHistory}/>
                    <Route path="/profile/about" component={UserInfo}/>
                    <Route path="/profile/bands" component={UserFavoriteBands}/>
                    <Route path="/profile/tracks" component={UserFavoriteTracks}/>
                </Switch>
            </div>
        )
    }
}

export default UserShow