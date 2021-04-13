import { Link } from '@reach/router';
import React, { Component } from 'react'

class Home extends Component {
  state = {
      roomName: ""
    }


    handleRoomNameChange = (event) => {
      const newRoom = event.target.value
      this.setState({roomName: newRoom})
  };
  
  render() {
    const {roomName} = this.state
    return (
       <div className="home-container">
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={this.handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`/${roomName}`} className="enter-room-button">
        Join room
      </Link>
    </div>
    )
  }
}

export default Home




