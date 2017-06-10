import React, { Component } from 'react'

class Spotify extends Component {
    render() {
        return (
            <div>
                <a href="https://accounts.spotify.com/authorize/?client_id=51955dd165764f22b8db23dcff335d15&response_type=code&redirect_uri=http://localhost:3000/spotify">Click Me</a>
            </div>
        )
    }
}

export default Spotify