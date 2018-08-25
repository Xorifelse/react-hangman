import * as React from 'react'
import {connect} from 'react-redux'

import Hangman from './Hangman'

import {makeGuess, newGame} from '../actions/game'

import {
  showGuess,
  wrongGuessCount,
  isWinner,
  gameFinished,
  randomWord
} from '../lib/game'

class HangmanContainer extends React.PureComponent {
  componentDidMount(){
    this.start()
  }

  handleFormInput(e){
    this.props.makeGuess(e.target.value)
    e.target.disabled = true
  }

  start(){
    this.props.newGame(randomWord())
  }

  render() {
    let hm = this.props.hangman
    if(!hm){
      return null
    }

    return (
      <Hangman 
        word={hm.word}
        show={showGuess(hm.word, hm.letters)}
        guessEvent={(e) => this.handleFormInput(e)}
        winner={isWinner(hm.word, hm.letters)}
        finished={gameFinished(hm.word, hm.letters)}
        count={wrongGuessCount(hm.word, hm.letters)}
        restart={(e) => this.start(e)}
      />
    )
  }
}

const mapStateToProps = (hangman) => {
  return {...hangman}
}

export default connect(mapStateToProps, {makeGuess, newGame})(HangmanContainer)