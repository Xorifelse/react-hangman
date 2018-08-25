import * as React from 'react'

import {
  showGuess,
  wrongGuessCount,
  wrongGuessLimit,
  isWinner,
  gameFinished,
  randomWord
} from '../lib/game'


export default function Hangman(props) {
  const genAlphabeth = () => {
    return Array(26).fill().map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
  }

  return (
    <div>
      <div>The word is {props.word}</div>
      <div>Show Guesses: {showGuess(props.word, props.guesses)}</div>
      <div>
        {genAlphabeth().map(v => 
            <button key={v} onClick={props.guessEvent} value={v}>{v}</button>
        )} 
      </div>
    </div>
  )
}