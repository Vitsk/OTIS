import { dataAPI, firmsAPI } from "../../api/api";

const SET_FIRMS_DATA = 'SET_FIRMS_DATA';
const SET_CHOOSEN_FIRM_DATA = 'SET_CHOOSEN_FIRM_DATA';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_MODAL_STATE = 'UPDATE_STATE_MODAL';
const SHOW_ALERT = 'SHOW_ALERT';

let initialState = {
  firms: [],
  firmName: '',
  idFirm: '',
  firmPhone: '',
  firmEmail: '',

  editModal: {
    firmName: '',
    prevIdFirm: '',
    nextIdFirm: '',
    firmPhone: '',
    firmEmail: '',
  },

  showAlert: false,
  isError: false,
  alertText: '',
}

const firmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRMS_DATA:
      return {
        ...state,
        firms: action.firms
      }

    case SET_CHOOSEN_FIRM_DATA:
      return {
        ...state,
        editModal: {
          ...state.editModal,
          firmName: action.firmName,
          prevIdFirm: action.idFirm,
          nextIdFirm: action.idFirm,
          firmPhone: action.firmPhone,
          firmEmail: action.firmEmail,
        }
      }

    case UPDATE_STATE:
      return {
        ...state,
        [action.name]: action.value
      }

    case UPDATE_MODAL_STATE:
      return {
        ...state,
        editModal: {
          ...state.editModal,
          [action.name]: action.value
        }
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
const setFirmsDataAC = (firms) => ({ type: SET_FIRMS_DATA, firms });
const setChoosenFirmDataAC = (firmName, idFirm, firmPhone, firmEmail) => ({ type: SET_CHOOSEN_FIRM_DATA, firmName, idFirm, firmPhone, firmEmail });
const showAlertAC = (alertText, isError = false) => ({ type: SHOW_ALERT, alertText, isError });
export const updateState = (name, value) => ({ type: UPDATE_STATE, name, value })
export const updateModalState = (name, value) => ({ type: UPDATE_MODAL_STATE, name, value })

// Thunks
export const setFirmsData = () => (dispatch) => {
  dataAPI.getFirms().then(data => {
    dispatch(setFirmsDataAC(data))
  })
}

export const setChoosenFirmData = (idFirm) => (dispatch) => {
  dataAPI.getChoosenFirm(idFirm).then(data => {
    dispatch(setChoosenFirmDataAC(data[0].name, data[0].id_firm, data[0].telephone, data[0].email))
  })
}

export const createFirmsRequest = (...data) => (dispatch) => {
  firmsAPI.createFirm(...data).then(() => {
    dispatch(showAlertAC('Фірму створено'))
    setTimeout(() => {
      dispatch(showAlertAC())
    }, 3000);
  }).catch(() => {
    dispatch(showAlertAC('Сталась помилка. Можливо даний ЄДРПОУ вже існує', true))
    setTimeout(() => {
      dispatch(showAlertAC())
    }, 3000);
  })
}

export const editFirmDataRequest = (...data) => (dispatch) => {
  firmsAPI.putEditFirmData(...data).then(() => {
    dispatch(showAlertAC('Фірму відредаговано'))
    setTimeout(() => {
      dispatch(showAlertAC())
    }, 3000);
  }).catch(() => {
    dispatch(showAlertAC('Сталась помилка. Можливо даний ЄДРПОУ вже існує', true))
    setTimeout(() => {
      dispatch(showAlertAC())
    }, 3000);
  })
}

export default firmsReducer;