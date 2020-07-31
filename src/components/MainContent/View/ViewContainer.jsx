import React, { Component } from 'react';
import View from './View';
import { connect } from 'react-redux';
import {
  setCars, setUserData, setFirmEmail, getChoosenCar, setBrandsName, setModelsName, setTypeName,
  updateStateAC, updateBrandsIdAC, updateAvailabilitySertificateAC, editRequest, emailRequest, deleteRequest,
  smsRequest, setFirmPhone
} from '../../../redux/reducers/viewReducer';

class ViewContainer extends Component {
  componentDidMount() {
    this.props.setCars()
    this.props.setBrandsName()
    this.props.setUserData()
  }

  editRequestHandler = () => {
    this.props.editRequest(
      this.props.choosenCar.prevStateNum, this.props.choosenCar.nextStateNum,
      this.props.choosenCar.vinCode, this.props.choosenCar.model, this.props.choosenCar.nextPassingDate,
      this.props.choosenCar.nextSertificationDate
    )
  }

  emailRequestHandler = () => {
    this.props.emailRequest(
      this.props.emailData.department, this.props.emailData.userEmail,
      this.props.emailData.telephoneNum, this.props.emailData.street, this.props.emailData.webSite,
      this.props.choosenCar.firmName, this.props.emailData.firmEmail, this.props.choosenCar.prevStateNum,
      this.props.choosenCar.brand, this.props.choosenCar.modelName, this.props.choosenCar.nextSertificationDate,
      this.props.choosenCar.nextPassingDate
    )
  }

  smsRequestHandler = () => {
    this.props.smsRequest(
      this.props.smsData.smsLogin, this.props.smsData.smsPass, this.props.smsData.smsApiKey,
      this.props.smsData.smsAlphaName, this.props.choosenCar.telephoneNum, this.props.choosenCar.prevStateNum,
    )
  }

  render() {
    return (
        <View isFetching={this.props.isFetching}
        cars={this.props.cars}
        choosenCar={this.props.choosenCar}
        emailData={this.props.emailData}
        setFirmEmail={this.props.setFirmEmail}
        setFirmPhone={this.props.setFirmPhone}
        getChoosenCar={this.props.getChoosenCar}
        setModelsName={this.props.setModelsName}
        setTypeName={this.props.setTypeName}
        updateState={this.props.updateStateAC}
        updateBrandsId={this.props.updateBrandsIdAC}
        updateAvailabilitySertificate={this.props.updateAvailabilitySertificateAC}
        editRequestHandler={this.editRequestHandler}
        emailRequestHandler={this.emailRequestHandler}
        smsRequestHandler={this.smsRequestHandler}
        deleteRequest={this.props.deleteRequest} />
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.viewPage.isFetching,
  cars: state.viewPage.cars,
  choosenCar: state.viewPage.choosenCar,
  emailData: state.viewPage.emailData,
  smsData: state.viewPage.smsData,
  stateNum: state.viewPage.stateNum
})

export default connect(mapStateToProps, {
  setCars, setUserData, setFirmEmail, getChoosenCar, setBrandsName,
  setModelsName, setTypeName, updateStateAC,
  updateBrandsIdAC, updateAvailabilitySertificateAC, editRequest, emailRequest, 
  deleteRequest, smsRequest, setFirmPhone
})(ViewContainer);
