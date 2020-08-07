import React from 'react';
import { connect } from 'react-redux';
import { changePassRequest, changeUserDataRequest, setProfileData, updateState } from '../../../redux/reducers/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setProfileData()
  }

  changePassHandler = () => {
    this.props.changePassRequest(this.props.password, this.props.newPassword , this.props.repeatPassword)
  }

  changeUserDataHandler = () => {
    this.props.changeUserDataRequest(this.props.firstName , this.props.secondName,
      this.props.dateBirthday, this.props.telephoneNumber, this.props.email,
      this.props.firmName, this.props.street, this.props.webSite)
  }

  render() {
    return (
      <Profile {...this.props}
      changePassHandler={this.changePassHandler}
      changeUserDataHandler={this.changeUserDataHandler} />
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.profilePage.email,
  password: state.profilePage.password,
  newPassword: state.profilePage.newPassword,
  repeatPassword: state.profilePage.repeatPassword,
  firmName: state.profilePage.firmName,
  street: state.profilePage.street,
  webSite: state.profilePage.webSite,
  firstName: state.profilePage.firstName,
  secondName: state.profilePage.secondName,
  dateBirthday: state.profilePage.dateBirthday,
  telephoneNumber: state.profilePage.telephoneNumber,
  showAlert: state.profilePage.showAlert,
  alertText: state.profilePage.alertText,
})

export default connect(mapStateToProps, {
  setProfileData, updateState, changePassRequest, changeUserDataRequest
})(ProfileContainer);