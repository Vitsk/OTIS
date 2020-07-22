import React from 'react';
import { Route, Switch } from 'react-router';
import About from '../About/About';
import Apark from '../Apark/Apark';
import FirmsContainer from '../Firms/FirmsContainer';
import MainContainer from '../Main/MainContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import SettingsContainer from '../Settings/SettingsContainer';
import ViewContainer from '../View/ViewContainer';

const MainComponent = () => {
  return (
    <>
      <NavbarContainer />
      <Switch >
        <Route path='/about' render={() => <About />} />
        <Route path='/main' render={() => <MainContainer />} />
        <Route path='/profile' render={() => <ProfileContainer />} />
        <Route path='/firms' render={() => <FirmsContainer />} />
        <Route path='/apark' render={() => <Apark />} />
        <Route path='/view' render={() => <ViewContainer />} />
        <Route path='/settings' render={() => <SettingsContainer />} />
      </Switch>
    </>
  );
}

export default MainComponent;
