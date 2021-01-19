import React from 'react';
import { connect, Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import MainComponent from "./components/MainContent/MainComponent/MainComponent";
import { checkLoginData, isLoginCheck, updateEmailAC, updatePassAC } from "./redux/reducers/loginReducer";
import store from "./redux/redux-store";


class App extends React.Component {
  componentDidMount() {
    this.props.isLoginCheck()
  }

  render() {

    if (this.props.isLogin) {
      return <MainComponent />
    } else {
      return <Login
        login={this.props.checkLoginData}
        updateEmail={this.props.updateEmailAC}
        updatePass={this.props.updatePassAC}
        inputEmail={this.props.inputEmail}
        inputPass={this.props.inputPass}
        showAlert={this.props.showAlert}
        isError={this.props.isError}
        alertText={this.props.alertText} />
    }
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

const AppContainer = connect(mapStateToProps, {
  checkLoginData,
  updateEmailAC,
  updatePassAC,
  isLoginCheck
})(App);

const MainApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp;
