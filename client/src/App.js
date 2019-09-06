import React from 'react';
import axios from 'axios';

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
      .then(res => console.log(res))
      .catch(err => console.log('noooo'));
  }

  render() {
    return (
      <div>Hello, I am Foo Component</div>
    )}
}

export default App;
