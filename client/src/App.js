import React from 'react';
import axios from 'axios';
import PlayerDisplay from './components/PlayerDisplay.js';

import './App.css';

class App extends React.Component {
  constructor() {
  super();
  this.state = {
    players: []
  };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      // .then(res => console.log('axios call', res)) //returns an array of players called data
      .then(res => {
        this.setState({players: res.data})
      })
      .catch(err => console.log('noooo'));
  }

  render() {
    console.log('state is set render', this.state.players)
    return (
      <div className="App">
          <h1>World Women's Cup</h1>
          <div className="player-box">
              {this.state.players.map(players => {
                return <PlayerDisplay key={players.id} players={players} />
              })}
          </div>
      </div>
    )}
}

export default App;
