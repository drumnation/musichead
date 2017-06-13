import React, { Component } from 'react'
import Logo from './logo'
import UserProfileButtons from './userProfileButtons'
import { Grid, Row } from 'react-bootstrap'

class TopHeadingRow extends Component {
    state = {  }
    render() {
        return (
            <Grid>
                <Row>
                    { 
                        true
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