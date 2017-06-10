import React, { Component } from 'react';
// import Chatroom from './components/Chatroom'
import Spotify from './components/Spotify'

class App extends Component {
  constructor() {
    super()

    this.state = {
      selectedChatroom: 1,
      chatrooms: []
    }
  }

  render() {
    return (
      <div className="ui grid container">
        {/*<Chatroom cableApp={this.props.cableApp} selectedChatroom={this.state.selectedChatroom} />*/}
        <Spotify />
      </div>
    )
  }
}

export default App;