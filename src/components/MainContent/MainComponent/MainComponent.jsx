import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import About from '../About/About';
import AparkContainer from '../Apark/AparkContainer';
import FirmsContainer from '../Firms/FirmsContainer';
import MainContainer from '../Main/MainContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import SettingsContainer from '../Settings/SettingsContainer';
import ViewContainer from '../View/ViewContainer';

const MainComponent = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/main');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavbarContainer />
      <Switch >
        <Route path='/about' render={() => <About />} />
        <Route path='/main' render={() => <MainContainer />} />
        <Route path='/profile' render={() => <ProfileContainer />} />
        <Route path='/firms' render={() => <FirmsContainer />} />
        <Route path='/apark' render={() => <AparkContainer />} />
        <Route path='/view' render={() => <ViewContainer />} />
        <Route path='/settings' render={() => <SettingsContainer />} />
      </Switch>
    </>
  );
}

export default MainComponent;
