import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import customers from '../processors/customers/reducers';
import consultants from '../processors/consultants/reducers';

const reducer = combineReducers({
  customers,
  consultants
})

export default createStore(
  reducer,
  applyMiddleware(thunk)
)