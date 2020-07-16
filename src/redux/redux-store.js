import { combineReducers, createStore } from 'redux';
import loginReducer from './loginReducer';

let reducers = combineReducers({
  loginPage: loginReducer,
});

export let store = createStore(reducers);