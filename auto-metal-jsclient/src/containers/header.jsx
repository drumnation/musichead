import React, { Component } from 'react'
import TopHeadingRow from '../components/header/topHeadingRow'
import TopNavLoggedIn from '../components/header/topNavLoggedIn'
import TopNavNotLoggedIn from '../components/header/topNavNotLoggedIn'
import { logIn } from '../api/railsApi'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            loggedIn: true
        }
    }

    handleLogin(event) {
        event.preventDefault()
        logIn(this.state)
        .then( response => {
            if (response.error) {
                return
            }
            localStorage.setItem('jwt', response.token)
            this.setState({ loggedIn: this.props.loggedIn })
            this.props.history.push('/')
        })
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
                                <TopNavLoggedIn loggedIn={this.state.loggedIn} />
                            </div>    
                        :
                            <div>
                                <TopHeadingRow loggedIn={this.state.loggedIn} />
                                <TopNavNotLoggedIn 
                                    loggedIn={this.state.loggedIn} 
                                    email={this.state.email} 
                                    password={this.state.password} 
                                    handleLogin={this.handleLogin()}
                                />
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default Header