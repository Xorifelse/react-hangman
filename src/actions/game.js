export const NEW_GAME = 'NEW GAME'
export const MAKE_GUESS = 'MAKE GUESS'

export function newGame(param) {
  return {
    type: NEW_GAME,
    payload: {
      name: param
    }
  }
}

export function makeGuess(letter) {
  return {
    type: MAKE_GUESS,
    payload: {
      letter
    }
  }
}