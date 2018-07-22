import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import customerReducer from '../processors/customers/reducers';
import consultantReducer from '../processors/consultants/reducers';

const reducer = combineReducers({
  customer: customerReducer,
  consultant: consultantReducer
})

export default createStore(
  reducer,
  applyMiddleware(thunk)
)