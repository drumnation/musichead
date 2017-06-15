import React, { Component } from 'react'
import SearchForArtist from './search/searchForArtist'
import SearchForLabel from './search/searchForLabel'
import SearchForTrack from './search/searchForTrack'
import SearchForAlbum from './search/searchForAlbum'
import { Switch, Route, withRouter } from 'react-router-dom'

class HomeLoggedIn extends Component {
    componentDidMount() {
        return fetch('http://localhost:3000/auth/spotify/refresh/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwt')
            },
            method: 'POST',
        }).then( res => res.json() )
    }

    render() {
        return(
            <Switch>
                <Route path='/artist' component={SearchForArtist}/>
                <Route path='/label' component={SearchForLabel}/>
                <Route path='/album' component={SearchForAlbum}/>
                <Route path='/track' component={SearchForTrack}/>
            </Switch>
        )
    }
}

export default withRouter(HomeLoggedIn)