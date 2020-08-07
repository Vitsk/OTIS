import React, { Component } from 'react';
import View from './View';
import { connect } from 'react-redux';
import {
  setCars, setCarsCount, setUserData, setFirmEmail, getChoosenCar, setBrandsName, setModelsName, setTypeName,
  updateStateAC, updateBrandsIdAC, updateAvailabilitySertificateAC, editRequest, emailRequest, deleteRequest,
  smsRequest, setFirmPhone, selectTypeAC, insertTypeAC
} from '../../../redux/reducers/viewReducer';

class ViewContainer extends Component {
  componentDidMount() {
    this.props.setCars()
    this.props.setCarsCount()
    this.props.setBrandsName()
    this.props.setUserData()
  }

  editRequestHandler = () => {
    this.props.editRequest(this.props.selectType,
      this.props.choosenCar.prevStateNum, this.props.choosenCar.nextStateNum,
      this.props.choosenCar.vinCode, this.props.choosenCar.brand, this.props.choosenCar.model,
      this.props.choosenCar.carType, this.props.choosenCar.nextPassingDate,
      this.props.choosenCar.nextSertificationDate
    )
  }

  emailRequestHandler = () => {
    this.props.emailRequest(
      this.props.emailData.department, this.props.emailData.userEmail,
      this.props.emailData.telephoneNum, this.props.emailData.street, this.props.emailData.webSite,
      this.props.choosenCar.firmName, this.props.emailData.firmEmail, this.props.choosenCar.prevStateNum,
      this.props.choosenCar.brand.value, this.props.choosenCar.model.label, this.props.choosenCar.nextSertificationDate,
      this.props.choosenCar.nextPassingDate)
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
        selectType={this.props.selectType}
        selectTypeAC={this.props.selectTypeAC}
        insertTypeAC={this.props.insertTypeAC}
        pageSize={this.props.pageSize}
        totalCarsCount={this.props.totalCarsCount}
        currentPage={this.props.currentPage}
        setCars={this.props.setCars}
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
        deleteRequest={this.props.deleteRequest}
        showAlert={this.props.showAlert}
        alertText={this.props.alertText} />
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.viewPage.isFetching,
  selectType: state.viewPage.selectType,
  pageSize: state.viewPage.pageSize,
  totalCarsCount: state.viewPage.totalCarsCount,
  currentPage: state.viewPage.currentPage,
  showAlert: state.viewPage.showAlert,
  alertText: state.viewPage.alertText,
  cars: state.viewPage.cars,
  choosenCar: state.viewPage.choosenCar,
  emailData: state.viewPage.emailData,
  smsData: state.viewPage.smsData,
  stateNum: state.viewPage.stateNum
})

export default connect(mapStateToProps, {
  setCars, setCarsCount, setUserData, setFirmEmail, getChoosenCar, setBrandsName,
  setModelsName, setTypeName, updateStateAC,
  updateBrandsIdAC, updateAvailabilitySertificateAC, editRequest, emailRequest,
  deleteRequest, smsRequest, setFirmPhone, selectTypeAC, insertTypeAC
})(ViewContainer);
