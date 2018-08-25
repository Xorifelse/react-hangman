import * as React from 'react'
import {connect} from 'react-redux'

import Hangman from './Hangman'

import {makeGuess, newGame} from '../actions/game'

import {
  wrongGuessCount,
  wrongGuessLimit,
  isWinner,
  gameFinished,
  randomWord
} from '../lib/game'

class HangmanContainer extends React.PureComponent {
  componentDidMount(){
    this.props.newGame(randomWord())
  }

  handleFormInput(e){
    e.target.disabled = true
    this.props.makeGuess(e.target.value)

    if(isWinner(this.props.hangman.word, this.props.hangman.letters || [])){
      alert('there is a winner')
    }

    
  }

  render() {

    return (
      <Hangman 
        word={this.props.hangman.word || ''}
        guessEvent={(e) => this.handleFormInput(e)}
        guesses={this.props.hangman.letters || []}
      />
    )
  }
}

const mapStateToProps = (hangman) => {
  return {...hangman}
}

export default connect(mapStateToProps, {makeGuess, newGame})(HangmanContainer)