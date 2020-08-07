import React, { Component } from 'react';
import Apark from './Apark';
import {
  setFirmsName, setBrandsName, setModelsName, setTypeName, updateStateAC,
  updateAvailabilitySertificateAC, selectTypeAC, insertTypeAC,
  sendRequestCreateCar
} from '../../../redux/reducers/aparkReducer';
import { connect } from 'react-redux';

class AparkContainer extends Component {
  componentDidMount() {
    this.props.setFirmsName()
    this.props.setBrandsName()
  }

  createCar() {
    this.props.sendRequestCreateCar(this.props.selectType,
      this.props.brand, this.props.model, this.props.carType,
      this.props.stateNum, this.props.idFirm.value,
      this.props.vinCode, this.props.dateOfPassing, this.props.nextPassingDate,
      this.props.nextSertificationDate, this.props.dateOfReceivingSertificate,
      this.props.availabilitySertificate)
  }

  render() {
    return (
      <Apark selectTypeAC={this.props.selectTypeAC}
        insertTypeAC={this.props.insertTypeAC}
        selectType={this.props.selectType}
        firms={this.props.firms}
        idFirm={this.props.idFirm}
        brands={this.props.brands}
        brand={this.props.brand}
        models={this.props.models}
        model={this.props.model}
        carType={this.props.carType}
        vinCode={this.props.vinCode}
        stateNum={this.props.stateNum}
        dateOfPassing={this.props.dateOfPassing}
        nextPassingDate={this.props.nextPassingDate}
        availabilitySertificate={this.props.availabilitySertificate}
        disabled={this.props.disabled}
        dateOfReceivingSertificate={this.props.dateOfReceivingSertificate}
        nextSertificationDate={this.props.nextSertificationDate}
        setModelsName={this.props.setModelsName}
        setTypeName={this.props.setTypeName}
        updateState={this.props.updateStateAC}
        updateAvailabilitySertificate={this.props.updateAvailabilitySertificateAC}
        createCar={this.props.sendRequestCreateCar}
        showAlert={this.props.showAlert}
        alertText={this.props.alertText} />
    );
  }
}

const mapStateToProps = (state) => ({
  selectType: state.aparkPage.selectType,
  firms: state.aparkPage.firms,
  brands: state.aparkPage.brands,
  models: state.aparkPage.models,
  idFirm: state.aparkPage.idFirm,
  brand: state.aparkPage.brand,
  model: state.aparkPage.model,
  carType: state.aparkPage.carType,
  vinCode: state.aparkPage.vinCode,
  stateNum: state.aparkPage.stateNum,
  dateOfPassing: state.aparkPage.dateOfPassing,
  nextPassingDate: state.aparkPage.nextPassingDate,
  availabilitySertificate: state.aparkPage.availabilitySertificate,
  disabled: state.aparkPage.disabled,
  dateOfReceivingSertificate: state.aparkPage.dateOfReceivingSertificate,
  nextSertificationDate: state.aparkPage.nextSertificationDate,
  showAlert: state.aparkPage.showAlert,
  alertText: state.aparkPage.alertText,
})

export default connect(mapStateToProps, {
  setFirmsName, setBrandsName, setModelsName, setTypeName, updateStateAC,
  updateAvailabilitySertificateAC, selectTypeAC, insertTypeAC,
  sendRequestCreateCar
})(AparkContainer);
