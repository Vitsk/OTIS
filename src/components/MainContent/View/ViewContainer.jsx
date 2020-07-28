import React, { Component } from 'react';
import View from './View';
import { connect } from 'react-redux';
import {
  setCars, setUserEmail, setFirmEmail, getChoosenCar, setBrandsName, setModelsName, setTypeName,
  updateBrandsIdAC, updateModelsIdAC, updateAvailabilitySertificateAC, updateVinCodeAC, updateStateNumAC,
  updateDateOfPassingAC, updateNextPassingDateAC, updateDateOfReceivingSertificateAC,
  updateNextSertificationDateAC
} from '../../../redux/reducers/viewReducer';

class ViewContainer extends Component {
  componentDidMount() {
    this.props.setCars()
    this.props.setBrandsName()
    this.props.setUserEmail()
  }

  render() {
    return (
      <View cars={this.props.cars}
        choosenCar={this.props.choosenCar}
        emails={this.props.emails}
        setFirmEmail={this.props.setFirmEmail}
        getChoosenCar={this.props.getChoosenCar}
        setModelsName={this.props.setModelsName}
        setTypeName={this.props.setTypeName}
        updateBrandsId={this.props.updateBrandsIdAC}
        updateModelsId={this.props.updateModelsIdAC}
        updateVinCode={this.props.updateVinCodeAC}
        updateStateNum={this.props.updateStateNumAC}
        updateDateOfPassing={this.props.updateDateOfPassingAC}
        updateNextPassingDate={this.props.updateNextPassingDateAC}
        updateDateOfReceivingSertificate={this.props.updateDateOfReceivingSertificateAC}
        updateNextSertificationDate={this.props.updateNextSertificationDateAC}
        updateAvailabilitySertificate={this.props.updateAvailabilitySertificateAC} />
    );
  }
}

const mapStateToProps = (state) => ({
  cars: state.viewPage.cars,
  choosenCar: state.viewPage.choosenCar,
  emails: state.viewPage.emails,
  stateNum: state.viewPage.stateNum
})

export default connect(mapStateToProps, {
  setCars, setUserEmail, setFirmEmail, getChoosenCar, setBrandsName,
  setModelsName, setTypeName, updateBrandsIdAC,
  updateModelsIdAC, updateAvailabilitySertificateAC, updateVinCodeAC, updateStateNumAC,
  updateDateOfPassingAC, updateNextPassingDateAC, updateDateOfReceivingSertificateAC,
  updateNextSertificationDateAC
})(ViewContainer);
