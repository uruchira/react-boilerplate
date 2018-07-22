import * as types from './actionTypes';

const initState = {
  consultants: [],
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.CONSULTANTS_LOAD:
      return { ...state, 
        consultants: action.payload
      }
    default:
      return state
  }
}
