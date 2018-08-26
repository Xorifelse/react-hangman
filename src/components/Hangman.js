import * as React from 'react'

import {Link} from 'react-router-dom'

export default function Hangman(props) {
  const genAlphabeth = () => {
    return Array(26).fill().map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
  }

  if(props.finished){
    let display = props.winner ? 'Rembert Survived!' : 'You loose!'
    return (
      <div>
        <div className="main">
          <div className={"hangman pos" + props.count} />
        </div>
        <div className="buttons">
          <h1><Link to="/">{display}</Link></h1>
          <div><Link to="/hangman" onClick={props.restart}>Try again?</Link></div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="main">
        <div className={"hangman pos" + props.count} />
        <div><h1>{props.show}</h1></div>
        <div>Wrong guesses: {props.count}</div>
      </div>
      <div className="buttons">
        {genAlphabeth().map(v =>
          <button key={v} onClick={props.guessEvent} value={v}>{v}</button>
        )}
      </div>
    </div>
  )
}