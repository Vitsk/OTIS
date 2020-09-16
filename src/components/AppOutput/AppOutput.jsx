import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkLoginData, updateEmailAC, updatePassAC, isLoginCheck } from '../../redux/reducers/loginReducer';
import MainComponent from '../MainContent/MainComponent/MainComponent';
import Login from '../Login/Login';

class AppOutput extends Component {
  componentDidMount() {
    this.props.isLoginCheck()
  }

  render() {
    return (
      <div>
        {this.props.isLogin ? <MainComponent /> :
          <Login
            login={this.props.checkLoginData}
            updateEmail={this.props.updateEmailAC}
            updatePass={this.props.updatePassAC} 
            inputEmail={this.props.inputEmail} 
            inputPass={this.props.inputPass}
            showAlert={this.props.showAlert}
            isError={this.props.isError}
            alertText={this.props.alertText} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.loginPage.isLogin,
  inputEmail: state.loginPage.inputEmail,
  inputPass: state.loginPage.inputPass,
  showAlert: state.loginPage.showAlert,
  isError: state.loginPage.isError,
  alertText: state.loginPage.alertText,
});


export default connect(mapStateToProps, { checkLoginData, updateEmailAC, updatePassAC, isLoginCheck })(AppOutput);
