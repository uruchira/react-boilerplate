import * as types from './actionTypes';

const initState = {
  customers: [],
  currentCustomer: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.CUSTOMER_ADD:
      return { ...state, 
        currentCustomer: '', customers: state.customers.concat(action.payload)
      }
    case types.CUSTOMERS_LOAD:
      return { ...state, 
        customers: action.payload
      }
    case types.CURRENT_UPDATE:
      return { ...state, 
        currentCustomer: action.payload
      }
    case types.CUSTOMER_REMOVE:
      return {...state,
        customers: state.customers.filter(t => t.id !== action.payload)
      }
    default:
      return state
  }
}
