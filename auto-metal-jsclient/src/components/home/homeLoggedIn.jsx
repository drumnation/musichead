import React, { Component } from 'react'
import SearchForArtist from './search/searchForArtist'
import SearchForLabel from './search/searchForLabel'
import SearchForTrack from './search/searchForTrack'
import SearchForAlbum from './search/searchForAlbum'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Grid, Col, Row } from 'react-bootstrap'

class HomeLoggedIn extends Component {
    render() {
        return (
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