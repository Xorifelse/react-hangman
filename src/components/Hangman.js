import * as React from 'react'

import {Link} from 'react-router-dom'

export default function Hangman(props) {
  const genAlphabeth = () => {
    return Array(26).fill().map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
  }

  if(props.finished){
    let display = props.winner ? 'Rembert Survived!' : 'Back to home page'
    return (
      <div class="container">
        <div class="left"></div>
        <div class="title">Hangman</div>
        <div class="right"></div>
        <div class="main">
          <div class={"hangman pos" + props.count} />
        </div>
        <div class="buttons">
          <h1><Link to="/">{display}</Link></h1>
          <div><Link to="/hangman" onClick={props.restart}>Try again?</Link></div>
        </div>
        <div class="bottom"></div>
      </div>
    )
  }

  return (
    <div class="container">
      <div class="left"></div>
      <div class="title">Hangman</div>
      <div class="right"></div>
      <div class="main">
        <div class={"hangman pos" + props.count} />
        <div><h1>{props.show}</h1></div>
        <div>Wrong guesses: {props.count}</div>
      </div>
      <div class="buttons">
        <div>
          {genAlphabeth().map(v => 
              <button key={v} onClick={props.guessEvent} value={v}>{v}</button>
          )} 
        </div>
      </div>
      <div class="bottom"></div>
    </div>
  )
}