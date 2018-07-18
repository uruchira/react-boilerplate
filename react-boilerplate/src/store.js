import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import customerReducer from './components/customers/reducers';

const reducer = combineReducers({
  customer: customerReducer
})

export default createStore(
  reducer,
  applyMiddleware(thunk)
)