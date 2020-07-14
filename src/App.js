import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Login from './components/Login/Login';
import About from './components/MainContent/About/About';
import Apark from './components/MainContent/Apark/Apark';
import Firms from './components/MainContent/Firms/Firms';
import Main from './components/MainContent/Main/Main';
import Navbar from './components/MainContent/Navbar/Navbar';
import Profile from './components/MainContent/Profile/Profile';
import Settings from './components/MainContent/Settings/Settings';
import View from './components/MainContent/View/View';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Login />} />
        <Route exact path='/about' render={() => <About />} />
        <Route path='/main' render={() => <Main />} />
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/firms' render={() => <Firms />} />
        <Route path='/apark' render={() => <Apark />} />
        <Route path='/view' render={() => <View />} />
        <Route path='/settings' render={() => <Settings />} />
      </Switch>
    </div>
  );
}

export default App;
