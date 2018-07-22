import * as types from './actionTypes';

const initState = {
  customers: [],
}

export default (state = initState.customers, action) => {
  switch (action.type) {
    case types.CUSTOMERS_LOAD:
      return action.customers;
    default:
      return state
  }
}
