import React, { Component } from 'react';
import Apark from './Apark';
import { setFirmsName, setBrandsName, setModelsName, setTypeName, updateFirmIdAC,
 updateBrandsIdAC, updateModelsIdAC, updateVinCodeAC, updateStateNumAC } from '../../../redux/reducers/aparkReducer';
import { connect } from 'react-redux';

class AparkContainer extends Component {
  componentDidMount() {
    this.props.setFirmsName()
    this.props.setBrandsName()
  }

  render() {
    return (
      <Apark firms={this.props.firms}
      brands={this.props.brands}
      models={this.props.models}
      model={this.props.model}
      carType={this.props.carType}
      vinCode={this.props.vinCode}
      stateNum={this.props.stateNum}
      setModelsName={this.props.setModelsName}
      setTypeName={this.props.setTypeName}
      updateFirmId={this.props.updateFirmIdAC}
      updateBrandsId={this.props.updateBrandsIdAC}
      updateModelsId={this.props.updateModelsIdAC}
      updateVinCode={this.props.updateVinCodeAC}
      updateStateNum={this.props.updateStateNumAC} />
    );
  }
}

const mapStateToProps = (state) => ({
  firms: state.aparkPage.firms,
  brands: state.aparkPage.brands,
  models: state.aparkPage.models,
  model: state.aparkPage.model,
  carType: state.aparkPage.carType,
  vinCode: state.aparkPage.vinCode,
  stateNum: state.aparkPage.stateNum
})

export default connect(mapStateToProps, { 
  setFirmsName, setBrandsName, setModelsName, setTypeName,
  updateFirmIdAC, updateBrandsIdAC, updateModelsIdAC, updateVinCodeAC,
  updateStateNumAC
})(AparkContainer);
