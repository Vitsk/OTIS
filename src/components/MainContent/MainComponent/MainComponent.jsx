import React from 'react';
import { Route, Switch } from 'react-router';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Apark from '../Apark/Apark';
import Firms from '../Firms/Firms';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import View from '../View/View';

const MainComponent = () => {
  return (
    <>
      <Navbar />
      <Switch >
        <Route path='/about' render={() => <About />} />
        <Route path='/main' render={() => <Main />} />
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/firms' render={() => <Firms />} />
        <Route path='/apark' render={() => <Apark />} />
        <Route path='/view' render={() => <View />} />
        <Route path='/settings' render={() => <Settings />} />
      </Switch>
    </>
  );
}

export default MainComponent;
