import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Media, Col, Grid, Row } from 'react-bootstrap'
import Logo from './logo'
import UserProfileButtons from './userProfileButtons'



class TopHeadingRow extends Component {
    state = {  }
    render() {
        return (
            <Grid>
                <Row>
                    { 
                        this.props.loggedIn === false 
                            ?
                                <Logo/>
                            :
                                <div>    
                                    <Logo/>
                                    <UserProfileButtons/>
                                </div>
                    }
                </Row>
            </Grid>
        )
    }
}


export default TopHeadingRow