import React from 'react';
import { Route, Switch } from 'react-router';
import About from '../About/About';
import Apark from '../Apark/Apark';
import Firms from '../Firms/Firms';
import MainContainer from '../Main/MainContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import Settings from '../Settings/Settings';
import ViewContainer from '../View/ViewContainer';

const MainComponent = () => {
  return (
    <>
      <NavbarContainer />
      <Switch >
        <Route path='/about' render={() => <About />} />
        <Route path='/main' render={() => <MainContainer />} />
        <Route path='/profile' render={() => <ProfileContainer />} />
        <Route path='/firms' render={() => <Firms />} />
        <Route path='/apark' render={() => <Apark />} />
        <Route path='/view' render={() => <ViewContainer />} />
        <Route path='/settings' render={() => <Settings />} />
      </Switch>
    </>
  );
}

export default MainComponent;
