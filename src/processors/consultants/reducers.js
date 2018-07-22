import * as types from './actionTypes';

const initState = {
  consultants: [],
}

export default (state = initState.consultants, action) => {
  switch (action.type) {
    case types.CONSULTANTS_LOAD:
      return action.consultants
    default:
      return state
  }
}
