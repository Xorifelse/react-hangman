export const NEW_GAME = 'NEW GAME'
export const MAKE_GUESS = 'MAKE GUESS'

export function newGame(word) {
  return {
    type: NEW_GAME,
    payload: {
      word: word,
      letters: []
    }
  }
}

export function makeGuess(letter) {
  return {
    type: MAKE_GUESS,
    payload: {
      letter: letter.toLowerCase()
    }
  }
}