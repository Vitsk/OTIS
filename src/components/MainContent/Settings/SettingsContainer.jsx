import React, { Component } from 'react';
import Settings from './Settings';
import { setSettingsData, updateSmsLoginAC, updateSmsPassAC, updateSmsApiKeyAC, updateSmsAlphaNameAC, updateSmsTextTemplateAC } from '../../../redux/reducers/settingsReducer';
import { connect } from 'react-redux';

class SettingsContainer extends Component {
  componentDidMount() {
    this.props.setSettingsData()
  }

  render() {
    return (
      <Settings {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  smsLogin: state.settingsPage.smsLogin,
  smsPass: state.settingsPage.smsPass,
  smsApiKey: state.settingsPage.smsApiKey,
  smsAlphaName: state.settingsPage.smsAlphaName,
  smsTextTemplate: state.settingsPage.smsTextTemplate,
})

export default connect(mapStateToProps, {
  setSettingsData,
  updateSmsLoginAC,
  updateSmsPassAC,
  updateSmsApiKeyAC,
  updateSmsAlphaNameAC,
  updateSmsTextTemplateAC,
})(SettingsContainer);