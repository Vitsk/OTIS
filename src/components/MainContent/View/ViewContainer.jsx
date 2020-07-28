import React, { Component } from 'react';
import View from './View';
import { connect } from 'react-redux';
import {
  setCars, setUserEmail, setFirmEmail, getChoosenCar, setBrandsName, setModelsName, setTypeName,
  updateStateAC, updateBrandsIdAC, updateAvailabilitySertificateAC,
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
        updateState={this.props.updateStateAC}
        updateBrandsId={this.props.updateBrandsIdAC}
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
  setModelsName, setTypeName, updateStateAC,
  updateBrandsIdAC, updateAvailabilitySertificateAC,
})(ViewContainer);
