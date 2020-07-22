import { dataAPI } from "../../api/api";

const SET_SETTINGS_DATA = 'SET_SETTINGS_DATA';
const UPDATE_SMS_LOGIN = 'SET_SETTINGS_DATA';
const UPDATE_SMS_PASS = 'SET_SETTINGS_DATA';
const UPDATE_SMS_API_KEY = 'SET_SETTINGS_DATA';
const UPDATE_SMS_ALPHA_NAME = 'SET_SETTINGS_DATA';
const UPDATE_SMS_TEXT_TEMPLATE = 'SET_SETTINGS_DATA';

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

    case UPDATE_SMS_LOGIN:
      return {
        ...state,
        smsLogin: action.smsLogin,
      }

    case UPDATE_SMS_PASS:
      return {
        ...state,
        smsPass: action.smsPass,
      }

    case UPDATE_SMS_API_KEY:
      return {
        ...state,
        smsApiKey: action.smsApiKey,
      }

    case UPDATE_SMS_ALPHA_NAME:
      return {
        ...state,
        smsAlphaName: action.smsAlphaName,
      }

    case UPDATE_SMS_TEXT_TEMPLATE:
      return {
        ...state,
        smsTextTemplate: action.smsTextTemplate,
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
export const updateSmsLoginAC = (smsLogin) => ({ type: UPDATE_SMS_LOGIN, smsLogin });
export const updateSmsPassAC = (smsPass) => ({ type: UPDATE_SMS_PASS, smsPass });
export const updateSmsApiKeyAC = (smsApiKey) => ({ type: UPDATE_SMS_API_KEY, smsApiKey });
export const updateSmsAlphaNameAC = (smsAlphaName) => ({ type: UPDATE_SMS_ALPHA_NAME, smsAlphaName });
export const updateSmsTextTemplateAC = (smsTextTemplate) => ({ type: UPDATE_SMS_TEXT_TEMPLATE, smsTextTemplate });

// Thunks
export const setSettingsData = () => (dispatch) => {
  dataAPI.getUserData().then(data => {
    dispatch(setSettingsDataAC(
      data[0]['sms-login'], data[0]['sms-pass'], data[0]['sms-api-key'], data[0]['sms-alpha-name'],
      data[0]['sms-text-template']
    ));
  });
}

export default settingsReducer;