import { dataAPI, userAPI } from "../../api/api";

const SET_SETTINGS_DATA = "settings/SET_SETTINGS_DATA";
const UPDATE_STATE = "settings/UPDATE_STATE";
const SHOW_ALERT = "settings/SHOW_ALERT";

let initialState = {
  smsLogin: '',
  smsPass: '',
  smsApiKey: '',
  smsAlphaName: '',
  smsTextTemplate: '',
  showAlert: false,
  isError: false,
  alertText: '',
}

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS_DATA:
      return {
        ...state,
        smsLogin: action.smsLogin,
        smsPass: action.smsPass,
        smsApiKey: action.smsApiKey,
        smsAlphaName: action.smsAlphaName,
        smsTextTemplate: action.smsTextTemplate,
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
const setSettingsDataAC = (smsLogin, smsPass, smsApiKey, smsAlphaName, smsTextTemplate) => (
  {
    type: SET_SETTINGS_DATA,
    smsLogin, smsPass, smsApiKey, smsAlphaName, smsTextTemplate
  }
);
const showAlertAC = (alertText, isError = false) => ({type: SHOW_ALERT, alertText, isError});
export const updateState = (name, value) => ({ type: UPDATE_STATE, name, value })

// Thunks
export const setSettingsData = () => (dispatch) => {
  dataAPI.getUserData().then(data => {
    dispatch(setSettingsDataAC(
      data[0]['sms-login'], data[0]['sms-pass'], data[0]['sms-api-key'], data[0]['sms-alpha-name'],
      data[0]['sms-text-template']
    ));
  });
}

// API requests 
export const changeSettingsSms = (...data) => (dispatch) => {
  userAPI.putChangeSettingsSms(...data).then(body => {
    dispatch(showAlertAC("Налаштування SMS-розсилки змінено"));
    setTimeout(() => {
      dispatch(showAlertAC())
    }, 3000);
  }).catch(() => {
    dispatch(showAlertAC('Помилка у виконанні операції', true));
    setTimeout(() => {
      dispatch(showAlertAC())
    }, 3000);
  })
} 

export default settingsReducer;