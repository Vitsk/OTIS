import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSettingsData, updateState, changeSettingsSms } from '../../../redux/reducers/settingsReducer';
import Settings from './Settings';

class SettingsContainer extends Component {
  componentDidMount() {
    this.props.setSettingsData()
  }

  changeSettingsSmsHandler = () => {
    this.props.changeSettingsSms(this.props.smsLogin, this.props.smsPass,
      this.props.smsApiKey, this.props.smsAlphaName, this.props.smsTextTemplate)
  }

  render() {
    return (
      <Settings {...this.props}
        changeSettingsSmsHandler={this.changeSettingsSmsHandler} />
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
  updateState, changeSettingsSms
})(SettingsContainer);