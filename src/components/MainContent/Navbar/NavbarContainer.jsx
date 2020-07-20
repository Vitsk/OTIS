import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { logoutUserAC } from '../../../redux/loginReducer';

class NavbarContainer extends Component {
  render() {
    return (
      <Navbar logoutUser={this.props.logoutUser} />
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginPage.isLogin
})

const mapDispatchToProps = (dispatch) => ({
  logoutUser() {
    dispatch(logoutUserAC())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);