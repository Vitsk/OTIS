import { dataAPI, firmsAPI } from "../../api/api";

const SET_FIRMS_DATA = "firms/SET_FIRMS_DATA";
const SET_CHOOSEN_FIRM_DATA = "firms/SET_CHOOSEN_FIRM_DATA";
const UPDATE_STATE = "firms/UPDATE_STATE";
const UPDATE_MODAL_STATE = "firms/UPDATE_MODAL_STATE";
const UPDATE_SEARCH_INPUT = "firms/UPDATE_SEARCH_INPUT";
const SHOW_ALERT = "firms/SHOW_ALERT";
const SEARCH_FIRMS = "firms/SEARCH_FIRMS";
const IS_SEARCHING_BTN_FETCHING = "firms/IS_SEARCHING_BTN_FETCHING";

let initialState = {
  firms: [],
  firmName: '',
  idFirm: '',
  firmPhone: '',
  firmEmail: '',
  searchInput: '',
  isSearchBtnFetching: false,

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
        firms: action.firms,
        searchInput: ''
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

    case UPDATE_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.searchInput,
      }

    case SEARCH_FIRMS:
      return {
        ...state,
        firms: action.firms,
        isSearchBtnFetching: !state.isSearchBtnFetching
      }

    case IS_SEARCHING_BTN_FETCHING:
      return {
        ...state,
        isSearchBtnFetching: !state.isSearchBtnFetching
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
const searchFirmsAC = (firms) => ({ type: SEARCH_FIRMS, firms })

export const updateState = (name, value) => ({ type: UPDATE_STATE, name, value });
export const updateModalState = (name, value) => ({ type: UPDATE_MODAL_STATE, name, value });
export const searchInputAC = (searchInput) => ({ type: UPDATE_SEARCH_INPUT, searchInput });
export const isSearchingBtnFetchingAC = () => ({ type: IS_SEARCHING_BTN_FETCHING });



// Thunks
export const setFirmsData = () => (dispatch) => {
  dataAPI.getFirms().then(data => {
    dispatch(setFirmsDataAC(data))
  })
}

export const searchFirms = (name) => (dispatch) => {
  dataAPI.getFirms().then(data => {
    let filterData = data.filter(firm => firm.name === name || name === '' ? firm : false);
    dispatch(searchFirmsAC(filterData))
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