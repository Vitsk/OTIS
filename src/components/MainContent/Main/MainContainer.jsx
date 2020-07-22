import React, { Component } from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import { setUserMainInfo } from '../../../redux/reducers/mainReducer';

class MainContainer extends Component {
  componentDidMount() {
    this.props.setUserMainInfo()
  }

  render() {
    return (
      <Main userName={this.props.userName}
      dateOfReg={this.props.dateOfReg}
      firmName={this.props.firmName}
      street={this.props.street}
      telephoneNum={this.props.telephoneNum}
      email={this.props.email} />
    );
  }
}


const mapStateToProps = (state) => ({
  userName: state.mainPage.userName,
  dateOfReg: state.mainPage.dateOfReg,
  firmName: state.mainPage.firmName,
  street: state.mainPage.street,
  telephoneNum: state.mainPage.telephoneNum,
  email: state.mainPage.email,
})



export default connect(mapStateToProps, { setUserMainInfo })(MainContainer);