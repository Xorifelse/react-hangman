import {
  NEW_GAME, 
  MAKE_GUESS 
} from "../actions/game";

export default (state = '', action = {}) => {
  switch (action.type){
    case NEW_GAME:
      return action.payload

    case MAKE_GUESS:
      return Object.assign({}, state, {
        letters: state.letters.concat(action.payload.letter)
      })
    default:
      return state
  }
}