import * as types from './actionTypes';

const initState = {
  customers: [],
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.CUSTOMERS_LOAD:
      return { ...state, 
        customers: action.payload
      }
    default:
      return state
  }
}
