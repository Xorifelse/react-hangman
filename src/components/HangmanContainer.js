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

class HangmanContainer extends React.Component {
  componentDidMount(){
    this.start()
  }

  handleFormInput(e){
    this.props.makeGuess(e.target.value)
    e.target.style = 'display: none'
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
      <div className="container">
        <div className="left"></div>
        <div className="title">Hangbert</div>
        <div className="right"></div>
        <Hangman
          word={hm.word}
          show={showGuess(hm.word, hm.letters)}
          guessEvent={(e) => this.handleFormInput(e)}
          winner={isWinner(hm.word, hm.letters)}
          finished={gameFinished(hm.word, hm.letters)}
          count={wrongGuessCount(hm.word, hm.letters)}
          restart={(e) => this.start(e)}
        />
        <div className="bottom"></div>
      </div>
    )
  }
}

const mapStateToProps = (hangman) => {
  return {...hangman}
}

export default connect(mapStateToProps, {makeGuess, newGame})(HangmanContainer)