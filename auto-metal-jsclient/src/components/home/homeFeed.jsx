import React, { Component } from 'react'
import './style.css'

class HomeFeed extends Component {
    state = {  }
    render() {
        return (
            <div id="container" className="cols">
                <div className="box one"></div>
                <div className="box two"></div>
                <div className="box one"></div>
                <div className="box three"></div>
                <div className="box two"></div>
                <div className="box five"></div>
                <div className="box one"></div>
                <div className="box two"></div>
                <div className="box six"></div>
                <div className="box three"></div>
                <div className="box two"></div>
            </div>
        )
    }
}

export default HomeFeed