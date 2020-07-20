import React from 'react';
import { connect } from 'react-redux';
import {
  setProfileReducer, updateDateBirthday, updateEmail, updateFirmName, updateFirstName, updateSecondName,
  updateStreet, updateTelephoneNumber, updateWebSite
} from '../../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setProfileReducer()
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.profilePage.email,
  firmName: state.profilePage.firmName,
  street: state.profilePage.street,
  webSite: state.profilePage.webSite,
  firstName: state.profilePage.firstName,
  secondName: state.profilePage.secondName,
  dateBirthday: state.profilePage.dateBirthday,
  telephoneNumber: state.profilePage.telephoneNumber
})

export default connect(mapStateToProps, {
  setProfileReducer, updateEmail, updateFirmName, updateStreet, updateWebSite,
  updateFirstName, updateSecondName, updateDateBirthday, updateTelephoneNumber
})(ProfileContainer);