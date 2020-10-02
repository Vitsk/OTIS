import { dataAPI } from "../../api/api";
import { SET_FIRMS_NAME, SET_BRANDS_NAME, SET_MODELS_NAME,
  SET_TYPE_NAME, UPDATE_STATE, SELECT_TYPE, INSERT_TYPE,
  AVAILABILITY_SERTIFICATE, SHOW_ALERT, } from '../actionCreators';

let initialState = {
  selectType: true,
  firms: [],
  brands: [],
  models: [],
  idFirm: { value: 'Виберіть фірму', label: 'Виберіть фірму' },
  brand: { value: 'Виберіть марку', label: 'Виберіть марку' },
  model: { value: 'Виберіть модель', label: 'Виберіть модель' },
  carType: '',
  vinCode: '',
  stateNum: '',
  dateOfPassing: '',
  nextPassingDate: '',
  availabilitySertificate: false,
  disabled: true,
  dateOfReceivingSertificate: '',
  nextSertificationDate: '',
  showAlert: false,
  isError: false,
  alertText: '',
}

const aparkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRMS_NAME:
      return {
        ...state,
        firms: action.firms
      }

    case SET_BRANDS_NAME:
      return {
        ...state,
        brands: action.brands,
      }

    case SET_MODELS_NAME:
      return {
        ...state,
        models: action.models,
        model: { value: 'Виберіть модель', label: 'Виберіть модель' },
        carType: ''
      }

    case SET_TYPE_NAME:
      return {
        ...state,
        carType: action.carType
      }

    case UPDATE_STATE:
      return {
        ...state,
        [action.name]: action.value
      }

    case SELECT_TYPE:
      return {
        ...state,
        selectType: true,
        brand: { value: 'Виберіть марку', label: 'Виберіть марку' },
        model: { value: 'Виберіть модель', label: 'Виберіть модель' },
        carType: '',
      }

    case INSERT_TYPE:
      return {
        ...state,
        selectType: false,
        brand: '',
        model: '',
        carType: '',
      }

    case AVAILABILITY_SERTIFICATE:
      return {
        ...state,
        availabilitySertificate: !state.availabilitySertificate,
        disabled: !state.disabled
      }

    case SHOW_ALERT:
      return {
        ...state,
        showAlert: !state.showAlert,
        alertText: action.alertText
      }

    default:
      return state;
  }
}

// AC
const setFirmsNameAC = (firms) => ({ type: SET_FIRMS_NAME, firms });
const setBrandsNameAC = (brands) => ({ type: SET_BRANDS_NAME, brands });
const setModelsNameAC = (models) => ({ type: SET_MODELS_NAME, models });
const setTypeNameAC = (carType) => ({ type: SET_TYPE_NAME, carType });

export const updateStateAC = (name, value) => ({ type: UPDATE_STATE, name, value });
export const selectTypeAC = () => ({ type: SELECT_TYPE });
export const insertTypeAC = () => ({ type: INSERT_TYPE });
export const updateAvailabilitySertificateAC = () => ({ type: AVAILABILITY_SERTIFICATE });
const showAlertAC = (alertText, isError = false) => ({ type: SHOW_ALERT, alertText, isError });

// Thunks
// Set in state firms names and id
export const setFirmsName = () => (dispatch) => {
  dataAPI.getFirms().then(data => {
    let firms = [];
    data.map(item => firms.push({
      value: item.id_firm,
      label: item.name
    }));
    dispatch(setFirmsNameAC(firms));
  })
}

// Set in state cars brand
export const setBrandsName = () => (dispatch) => {
  dataAPI.getCarsBrand().then(data => {
    let brands = [];
    data.map(item => brands.push({
      value: item.brand,
      label: item.brand,
    }));
    dispatch(setBrandsNameAC(brands));
  })
}

// Set in state cars model
export const setModelsName = (brand) => (dispatch) => {
  dataAPI.getCarsModel(brand).then(data => {
    let models = [];
    data.map(item => models.push({
      value: item.id_model,
      label: item.model
    }));
    dispatch(setModelsNameAC(models));
  })
}

// Set in state cars type
export const setTypeName = (model) => (dispatch) => {
  dataAPI.getCarsType(model).then(data => {
    dispatch(setTypeNameAC(data[0].type));
  })
}

export const sendRequestCreateCar = (...data) => (dispatch) => {
  dataAPI.postCreateCar(...data).then(body => {
    dispatch(showAlertAC("Машину створено"));
    setTimeout(() => {
      dispatch(showAlertAC())
    }, 3000);
  }).catch(() => {
    dispatch(showAlertAC('Сталася помилка при створені машини. Спробуйте ще раз', true));
    setTimeout(() => {
      dispatch(showAlertAC())
    }, 3000);
  })
}

export default aparkReducer;