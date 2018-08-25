import {
  NEW_GAME, 
  MAKE_GUESS 
} from "../actions/game";

export default (state = '', action = {}) => {
  switch (action.type){
    case NEW_GAME:
      return action.payload
    case MAKE_GUESS:
      let guesses = [].concat('letters' in state ? state.letters : [])
      guesses.push(action.payload.letter.toLowerCase())

      return {
        ...state, letters: guesses
      }
    default:
      return state
  }
}