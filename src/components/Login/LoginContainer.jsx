import React, { Component } from 'react';
import { getApiKey } from '../../api/api';
import Login from './Login';

class LoginContainer extends Component {
  componentWillUnmount() {
    getApiKey()
  }

  render() {
    return (
      <Login {...this.props} />
    );
  }
}

export default LoginContainer;
