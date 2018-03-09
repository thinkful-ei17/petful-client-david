import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import catReducer from './reducers/cat';
import dogReducer from './reducers/dog';

export default createStore(
  combineReducers({
    catReducer,
    dogReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  applyMiddleware(thunk));