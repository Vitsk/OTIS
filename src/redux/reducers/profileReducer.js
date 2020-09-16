import { dataAPI, userAPI } from "../../api/api";

const SET_PROFILE_DATA = 'SET_PROFILE_INFO';
const UPDATE_STATE = 'UPDATE_STATE';
const SHOW_ALERT = 'SHOW_ALERT';

let initialState = {
  email: '',
  password: '',
  newPassword: '',
  repeatPassword: '',
  firmName: '',
  street: '',
  webSite: '',
  secondName: '',
  firstName: '',
  dateBirthday: '',
  telephoneNumber: '',

  showAlert: false,
  isError: false,
  alertText: '',
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
      }

    case UPDATE_STATE:
      return {
        ...state,
        [action.name]: action.value
      }

    case SHOW_ALERT:
      return {
        ...state,
        showAlert: !state.showAlert,
        isError: action.isError,
        alertText: action.alertText
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
const showAlertAC = (alertText, isError = false) => ({ type: SHOW_ALERT, alertText, isError });
export const updateState = (name, value) => ({ type: UPDATE_STATE, name, value })

// Thunks
export const setProfileData = () => (dispatch) => {
  dataAPI.getUserData().then(data => {
    dispatch(setProfileDataAC(
      data[0].email, data[0].department, data[0].street, data[0].web_site,
      data[0].first_name, data[0].second_name, data[0].date_birthday, data[0].telephone_number
    ));
  });
}

// userAPI requests 
export const changePassRequest = (...data) => (dispatch) => {
  userAPI.putChangePassRequest(...data).then((data) => {
    dispatch(showAlertAC('Пароль змінено'));
    setTimeout(() => {
      dispatch(showAlertAC())
    }, 3000);
  }).catch(() => {
    dispatch(showAlertAC('Пароль повинен містити більше ніж 8 символів', true));
    setTimeout(() => {
      dispatch(showAlertAC())
    }, 3000);
  })
  
}

export const changeUserDataRequest = (...data) => (dispatch) => {
  userAPI.putChangeUserData(...data).then((data) => {
    dispatch(showAlertAC('Інформацію змінено'));
    setTimeout(() => {
      dispatch(showAlertAC())
    }, 3000);
  }).catch(() => {
    dispatch(showAlertAC('Сталась помилка, повторіть ще раз', true));
    setTimeout(() => {
      dispatch(showAlertAC())
    }, 3000);
  })
}

export default profileReducer;