import { dataAPI } from "../api/api";

const SET_PROFILE_DATA = 'SET_PROFILE_INFO';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_FIRM_NAME = 'UPDATE_FIRM_NAME';
const UPDATE_STREET = 'UPDATE_STREET';
const UPDATE_WEB_SITE = 'UPDATE_WEB_SITE';
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_SECOND_NAME = 'UPDATE_SECOND_NAME';
const UPDATE_DATE_BIRTHDAY = 'UPDATE_DATE_BIRTHDAY';
const UPDATE_TELEPHONE_NUMBER = 'UPDATE_TELEPHONE_NUMBER';

let initialState = {
  email: '',
  firmName: '',
  street: '',
  webSite: '',
  firstName: '',
  secondName: '',
  dateBirthday: '',
  telephoneNumber: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return {
        ...state,
        email: action.email,
        firmName: action.firmName,
        street: action.street,
        webSite: action.webSite,
        firstName: action.firstName,
        secondName: action.secondName,
        dateBirthday: action.dateBirthday,
        telephoneNumber: action.telephoneNumber
      };

      case UPDATE_EMAIL: 
        return {
          ...state,
          email: action.email
        }

      case UPDATE_FIRM_NAME:
        return {
          ...state,
          firmName: action.firmName
        }

      case UPDATE_STREET:
        return {
          ...state,
          street: action.street
        }

      case UPDATE_WEB_SITE:
        return {
          ...state,
          webSite: action.webSite
        }

      case UPDATE_FIRST_NAME:
        return {
          ...state,
          firstName: action.firstName
        }

      case UPDATE_SECOND_NAME:
        return {
          ...state,
          secondName: action.secondName
        }

      case UPDATE_DATE_BIRTHDAY:
        return {
          ...state,
          dateBirthday: action.dateBirthday
        }

      case UPDATE_TELEPHONE_NUMBER:
        return {
          ...state,
          telephoneNumber: action.telephoneNumber
        }


    default:
      return state;
  }
}

// AC
const setProfileDataAC = (email, firmName, street, webSite, firstName, secondName, dateBirthday, telephoneNumber) => (
  {
    type: SET_PROFILE_DATA,
      email, firmName, street, webSite, firstName, secondName, dateBirthday, telephoneNumber
  }
);
export const updateEmail = (email) => ({type: UPDATE_EMAIL, email})
export const updateFirmName = (firmName) => ({type: UPDATE_FIRM_NAME, firmName})
export const updateStreet = (street) => ({type: UPDATE_STREET, street})
export const updateWebSite = (webSite) => ({type: UPDATE_WEB_SITE, webSite})
export const updateFirstName = (firstName) => ({type: UPDATE_FIRST_NAME, firstName})
export const updateSecondName = (secondName) => ({type: UPDATE_SECOND_NAME, secondName})
export const updateDateBirthday = (dateBirthday) => ({type: UPDATE_DATE_BIRTHDAY, dateBirthday})
export const updateTelephoneNumber = (telephoneNumber) => ({type: UPDATE_TELEPHONE_NUMBER, telephoneNumber})

// Thunks
export const setProfileReducer = () => (dispatch) => {
  dataAPI.getUserData().then(data => {
    dispatch(setProfileDataAC(
      data[0].email, data[0].department, data[0].street, data[0].web_site,
      data[0].first_name, data[0].second_name, data[0].date_birthday, data[0].telephone_number
    ));
  });
}

export default profileReducer;