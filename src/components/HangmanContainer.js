import * as React from 'react'
import {connect} from 'react-redux'

import Hangman from './Hangman'

import {makeGuess, newGame} from '../actions/game'

class HangmanContainer extends React.PureComponent {
  state = {}

  componentDidMount(){
    this.props.makeGuess('a')
  }

  render() {
    return <Hangman />
  }
}

const mapStateToProps = (data) => ({data})

export default connect(mapStateToProps, {makeGuess, newGame})(HangmanContainer)