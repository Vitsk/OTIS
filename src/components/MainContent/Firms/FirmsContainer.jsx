import React, { Component } from 'react';
import Firms from './Firms';
import { setFirmsData, setChoosenFirmData, createFirmsRequest, updateState, updateModalState, editFirmDataRequest, searchFirms, isSearchingBtnFetchingAC, searchInputAC, setNameFirms } from '../../../redux/reducers/firmsReducer';
import { connect } from 'react-redux';

class FirmsContainer extends Component {
  componentDidMount() {
    this.props.setFirmsData();
    this.props.setNameFirms();
  }

  createFirmHandler = () => {
    this.props.createFirmsRequest(this.props.idFirm, this.props.firmName,
      this.props.firmPhone, this.props.firmEmail)
  }

  editFirmDataHandler = () => {
    this.props.editFirmDataRequest(this.props.editModal.prevIdFirm, this.props.editModal.nextIdFirm,
      this.props.editModal.firmName, this.props.editModal.firmPhone, this.props.editModal.firmEmail)
  }

  render() {
    return (
      <Firms {...this.props}
        createFirmHandler={this.createFirmHandler}
        editFirmDataHandler={this.editFirmDataHandler} />
    );
  }
}

const mapStateToProps = (state) => ({
  firms: state.firmsPage.firms,
  nameFirms: state.firmsPage.nameFirms,
  selectedFirm: state.firmsPage.selectedFirm,
  firmName: state.firmsPage.firmName,
  idFirm: state.firmsPage.idFirm,
  firmPhone: state.firmsPage.firmPhone,
  firmEmail: state.firmsPage.firmEmail,
  isSearchBtnFetching: state.firmsPage.isSearchBtnFetching,

  editModal: {
    firmName: state.firmsPage.editModal.firmName,
    prevIdFirm: state.firmsPage.editModal.prevIdFirm,
    nextIdFirm: state.firmsPage.editModal.nextIdFirm,
    firmPhone: state.firmsPage.editModal.firmPhone,
    firmEmail: state.firmsPage.editModal.firmEmail,
  },
  showAlert: state.firmsPage.showAlert,
  isError: state.firmsPage.isError,
  alertText: state.firmsPage.alertText
})

export default connect(mapStateToProps, {
  setFirmsData, createFirmsRequest,
  updateState, updateModalState, setChoosenFirmData,
  editFirmDataRequest, searchFirms, searchInputAC, isSearchingBtnFetchingAC,
  setNameFirms
})(FirmsContainer);