import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loginReducer from './loginReducer';
import mainReducer from './mainReducer';
import profileReducer from './profileReducer';
import viewReducer from './viewReducer';

let reducers = combineReducers({
  loginPage: loginReducer,
  mainPage: mainReducer,
  profilePage: profileReducer,
  viewPage: viewReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;