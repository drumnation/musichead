import React, { Component } from 'react'
import SearchForArtist from './search/searchForArtist'
import SearchForTrack from './search/searchForTrack'
import SearchForAlbum from './search/searchForAlbum'
import UserShow from '../../containers/userShow'
// import HomeFeed from './homeFeed'
import { Switch, Route, withRouter } from 'react-router-dom'
import { refreshSpotifyAuthToken } from '../../api/spotify'


class HomeLoggedIn extends Component {
    componentDidMount() {
        refreshSpotifyAuthToken()
        .then( json => localStorage.setItem('spotify_token', json.spotify_token))
    }

    render() {
        return(
            <Switch>
                {/*<Route exact path='/' component={HomeFeed}/>*/}
                <Route exact path='/' component={UserShow}/>
                <Route path='/artist' component={SearchForArtist}/>
                <Route path='/album' component={SearchForAlbum}/>
                <Route path='/track' component={SearchForTrack}/>
            </Switch>
        )
    }
}

export default withRouter(HomeLoggedIn)