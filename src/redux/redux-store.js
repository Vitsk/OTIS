import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firmsReducer from './reducers/firmsReducer';
import loginReducer from './reducers/loginReducer';
import mainReducer from './reducers/mainReducer';
import profileReducer from './reducers/profileReducer';
import settingsReducer from './reducers/settingsReducer';
import viewReducer from './reducers/viewReducer';
import aparkReducer from './reducers/aparkReducer';

let reducers = combineReducers({
  loginPage: loginReducer,
  mainPage: mainReducer,
  profilePage: profileReducer,
  firmsPage: firmsReducer,
  aparkPage: aparkReducer,
  viewPage: viewReducer,
  settingsPage: settingsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;