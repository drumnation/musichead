import React, { Component } from 'react'
import TopHeadingRow from '../components/header/topHeadingRow'
import TopNavLoggedIn from '../components/header/topNavLoggedIn'
import TopNavNotLoggedIn from '../components/header/topNavNotLoggedIn'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: true
        }
    }

    render() {
        return (
            <div>
                <div>
                    {
                        false
                        ?
                            <div>
                                <TopHeadingRow loggedIn={this.state.loggedIn} />
                                <TopNavLoggedIn  />
                            </div>    
                        :
                            <div>
                                <TopHeadingRow loggedIn={this.state.loggedIn} />
                                <TopNavNotLoggedIn  />
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default Header