import React, { Component } from 'react'
import TopNav from '../components/header/topNav'
import TopHeadingRow from '../components/header/topHeadingRow'

class Header extends Component {
    render() {
        return (
            <div>
                <h1>HEADER</h1>
                <div>
                    <TopHeadingRow />
                </div>
                <div>
                    <TopNav />
                </div>
            </div>
        )
    }
}

export default Header