import React, { Component } from 'react';
import Main from './Main';
import { connect } from 'react-redux';
import {
  setUserMainInfo, setFirmsCount, setCarsCount, setTOcount, setSertCount,
  setSertificateCount, setAllTOCount
} from '../../../redux/reducers/mainReducer';

class MainContainer extends Component {
  componentDidMount() {
    this.props.setUserMainInfo()
    this.props.setFirmsCount()
    this.props.setCarsCount()
    this.props.setTOcount()
    this.props.setSertCount()
    this.props.setAllTOCount()
    this.props.setSertificateCount()
  }

  render() {
    return (
      <Main userName={this.props.userName}
        dateOfReg={this.props.dateOfReg}
        firmName={this.props.firmName}
        street={this.props.street}
        telephoneNum={this.props.telephoneNum}
        email={this.props.email}
        firmsCount={this.props.firmsCount}
        carsCount={this.props.carsCount}
        sumThirtyTO={this.props.sumThirtyTO}
        sumFourteenTO={this.props.sumFourteenTO}
        sumThirtySert={this.props.sumThirtySert}
        sumFourteenSert={this.props.sumFourteenSert}
        balance={this.props.balance}
        sertCount={this.props.sertCount}
        allTOCount={this.props.allTOCount} />
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
  firmsCount: state.mainPage.firmsCount,
  carsCount: state.mainPage.carsCount,
  sumThirtyTO: state.mainPage.sumThirtyTO,
  sumFourteenTO: state.mainPage.sumFourteenTO,
  sumThirtySert: state.mainPage.sumThirtySert,
  sumFourteenSert: state.mainPage.sumFourteenSert,
  allTOCount: state.mainPage.allTOCount,
  sertCount: state.mainPage.sertCount,
  balance: state.mainPage.balance,
})



export default connect(mapStateToProps, {
  setUserMainInfo, setFirmsCount, setCarsCount,
  setTOcount, setSertCount, setSertificateCount, setAllTOCount
})(MainContainer);