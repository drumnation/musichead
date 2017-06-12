import React, { Component } from 'react'
import HomeSearchBar from '../components/home/homeSearchBar'

class HomeShow extends Component {
    render() {
        console.log('homeshow props', this.props)
        return (
            <div>
                <h1>HOME SHOW</h1>
                <HomeSearchBar
                    props={this.props}
                    search={this.props}
                />
            </div>
        )
    }
}

export default HomeShow