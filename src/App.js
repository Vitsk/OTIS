import React from 'react';
import './App.css';
import MainComponent from "./components/MainContent/MainComponent/MainComponent";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {checkLoginData, updateEmailAC, updatePassAC} from "./redux/reducers/loginReducer";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {initializeApp} from "./redux/reducers/app-reducer";
import Loader from "./components/Loader/Loader";


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />
    }

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
  initialized: state.appInitialize.initialized
});

const AppContainer = connect(mapStateToProps, {
  checkLoginData,
  updateEmailAC,
  updatePassAC,
  initializeApp
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
