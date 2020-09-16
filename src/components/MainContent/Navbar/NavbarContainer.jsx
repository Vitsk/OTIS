import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { logout } from '../../../redux/reducers/loginReducer';

class NavbarContainer extends Component {
  render() {
    return (
      <Navbar logoutUser={this.props.logout} />
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginPage.isLogin
})

// const mapDispatchToProps = (dispatch) => ({
//   logoutUser() {
//     dispatch(logoutUserAC())
//   }
// })

export default connect(mapStateToProps, { logout })(NavbarContainer);