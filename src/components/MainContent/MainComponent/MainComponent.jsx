import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Apark from '../Apark/Apark';
import Firms from '../Firms/Firms';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import View from '../View/View';
import Main from '../Main/Main';

const MainComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>
            <Route path='/main' render={() => <Main />} />
            <Route path='/profile' render={() => <Profile />} />
            <Route path='/firms' render={() => <Firms />} />
            <Route path='/apark' render={() => <Apark />} />
            <Route path='/view' render={() => <View />} />
            <Route path='/settings' render={() => <Settings />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default MainComponent;
