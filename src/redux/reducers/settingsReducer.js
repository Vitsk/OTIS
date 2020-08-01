import { dataAPI, userAPI } from "../../api/api";

const SET_SETTINGS_DATA = 'SET_SETTINGS_DATA';
const UPDATE_STATE = 'UPDATE_STATE';


let initialState = {
  smsLogin: '',
  smsPass: '',
  smsApiKey: '',
  smsAlphaName: '',
  smsTextTemplate: ''
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
  userAPI.putChangeSettingsSms(...data);
} 

export default settingsReducer;