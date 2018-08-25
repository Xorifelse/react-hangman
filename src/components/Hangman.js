import * as React from 'react'

import {Link} from 'react-router-dom'


export default function Hangman(props) {
  const genAlphabeth = () => {
    return Array(26).fill().map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
  }

  if(props.finished){
    return props.winner ? (
      <div><h1><Link to="/">Winner!</Link></h1><div><Link to="/hangman" onClick={props.restart}>Try again?</Link></div></div>
    ) : (
      <div><h1><Link to="/">Looser!</Link></h1><div><Link to="/hangman" onClick={props.restart}>Try again?</Link></div></div>
    )
  }

  return (
    <div>
      <div><h1>The word is {props.word}</h1></div>
      <div><h1>{props.show}</h1></div>
      <div>Wrong guesses: {props.count}</div>
      <div>
        {genAlphabeth().map(v => 
            <button key={v} onClick={props.guessEvent} value={v}>{v}</button>
        )} 
      </div>

    </div>
  )
}