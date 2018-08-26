import React, { Component } from 'react';

import {Route} from 'react-router-dom'

import HangmanContainer from './components/HangmanContainer'
import Home from './components/Home';

import styles from './index.css'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Route exact path="/" component={Home} />
        <Route exact path="/hangman" component={HangmanContainer} />
      </div>
    );
  }
}

export default App;
