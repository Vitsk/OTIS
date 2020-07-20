import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkLoginData, updateEmailAC, updatePassAC } from '../../redux/loginReducer';
import MainComponent from '../MainContent/MainComponent/MainComponent';
import Login from '../Login/Login';

class AppOutput extends Component {
  render() {
    return (
      <div>
        {this.props.isLogin ? <MainComponent /> :
          <Login
            login={this.props.checkLoginData}
            updateEmail={this.props.updateEmailAC}
            updatePass={this.props.updatePassAC} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginPage.isLogin
});


export default connect(mapStateToProps, { checkLoginData, updateEmailAC, updatePassAC })(AppOutput);
