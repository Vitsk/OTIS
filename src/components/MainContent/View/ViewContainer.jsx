import React, { Component } from 'react';
import View from './View';
import { connect } from 'react-redux';
import {
  setCars, setUserEmail, setFirmEmail, getChoosenCar, setBrandsName, setModelsName, setTypeName,
  updateStateAC, updateBrandsIdAC, updateAvailabilitySertificateAC, editRequest
} from '../../../redux/reducers/viewReducer';

class ViewContainer extends Component {
  componentDidMount() {
    this.props.setCars()
    this.props.setBrandsName()
    this.props.setUserEmail()
  }

  editRequestHandler = () => {
    this.props.editRequest(
      this.props.choosenCar.prevStateNum, this.props.choosenCar.nextStateNum,
      this.props.choosenCar.vinCode, this.props.choosenCar.model, this.props.choosenCar.nextPassingDate,
      this.props.choosenCar.nextSertificationDate
    )
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
        updateAvailabilitySertificate={this.props.updateAvailabilitySertificateAC}
        editRequestHandler={this.editRequestHandler} />
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
  updateBrandsIdAC, updateAvailabilitySertificateAC, editRequest
})(ViewContainer);
