import React, { Component } from 'react';

import {Switch, Route, Link} from 'react-router-dom'

import HangmanContainer from './components/HangmanContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HangmanContainer />
      </div>
    );
  }
}

export default App;
