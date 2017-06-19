import React, { Component } from 'react'
import SearchForArtist from './search/searchForArtist'
import SearchForTrack from './search/searchForTrack'
import SearchForAlbum from './search/searchForAlbum'
import HomeFeed from './homeFeed'
import { Switch, Route, withRouter } from 'react-router-dom'


class HomeLoggedIn extends Component {
    componentDidMount() {
        return fetch(`http://localhost:3000/auth/spotify/refresh/?id=${localStorage.getItem('user_id')}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwt')
            },
            method: 'POST',
        }).then( response => response.json() )
        .then( json => localStorage.setItem('spotify_token', json.spotify_token))
    }

    render() {
        return(
            <Switch>
                {/*<Route exact path='/' component={HomeFeed}/>*/}
                <Route exact path='/' component={SearchForTrack}/>
                <Route path='/artist' component={SearchForArtist}/>
                <Route path='/album' component={SearchForAlbum}/>
                <Route path='/track' component={SearchForTrack}/>
            </Switch>
        )
    }
}

export default withRouter(HomeLoggedIn)