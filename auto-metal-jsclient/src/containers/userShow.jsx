import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import UserProfileHeader from '../components/user/userProfileHeader'
import UserListeningHistory from '../components/user/userListeningHistory'
import UserAbout from '../components/user/userAbout'
import UserFavoriteBands from '../components/user/userFavoriteBands'
import UserFavoriteTracks from '../components/user/userFavoriteTracks'

class UserShow extends Component {
    render() {
        return (
            <div>
                <UserProfileHeader />
                <Switch>
                    <Route path="/profile/about" component={UserAbout}/>
                    <Route path="/profile/bands" component={UserFavoriteBands}/>
                    <Route path="/profile/tracks" component={UserFavoriteTracks}/>
                    <Route path="/profile/" component={UserListeningHistory}/>
                </Switch>
            </div>
        )
    }
}

export default UserShow