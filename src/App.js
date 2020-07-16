import React from 'react';
import './App.css';
import Login from './components/Login/Login';
// import { Route, Switch } from 'react-router';
import MainComponent from './components/MainContent/MainComponent/MainComponent';
// import About from './components/MainContent/About/About';
// import Apark from './components/MainContent/Apark/Apark';
// import Firms from './components/MainContent/Firms/Firms';
// import Main from './components/MainContent/Main/Main';
// import Navbar from './components/MainContent/Navbar/Navbar';
// import Profile from './components/MainContent/Profile/Profile';
// import Settings from './components/MainContent/Settings/Settings';
// import View from './components/MainContent/View/View';

const App = () => {
  let isLogin = true;
  return (
    <div>
      {isLogin ? <MainComponent /> : <Login isLogin={isLogin} /> }
    </div>
  );
}

export default App;
