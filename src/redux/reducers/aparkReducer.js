import { dataAPI } from "../../api/api";

const SET_FIRMS_NAME = 'SET_FIRMS_VALUE';
const SET_BRANDS_NAME = 'SET_BRANDS_NAME';
const SET_MODELS_NAME = 'SET_MODELS_NAME';
const SET_TYPE_NAME = 'SET_TYPE_NAME';
const UPDATE_STATE = 'UPDATE_STATE';
const AVAILABILITY_SERTIFICATE = 'AVAILABILITY_SERTIFICATE';

let initialState = {
  firms: [],
  brands: [],
  models: [],
  idFirm: '',
  brand: '',
  model: '',
  carType: '',
  vinCode: '',
  stateNum: '',
  dateOfPassing: '',
  nextPassingDate: '',
  availabilitySertificate: false,
  disabled: true,
  dateOfReceivingSertificate: '',
  nextSertificationDate: ''
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
      // state.models = [];
      return {
        ...state,
        models: action.models,
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

    case AVAILABILITY_SERTIFICATE:
      return {
        ...state,
        availabilitySertificate: !state.availabilitySertificate,
        disabled: !state.disabled
      }
  
    default:
      return state;
  }
}

// AC
const setFirmsNameAC = (firms) => ({type: SET_FIRMS_NAME, firms});
const setBrandsNameAC = (brands) => ({type: SET_BRANDS_NAME, brands});
const setModelsNameAC = (models) => ({type: SET_MODELS_NAME, models});
const setTypeNameAC = (carType) => ({type: SET_TYPE_NAME, carType});

export const updateStateAC = (name, value) => ({type: UPDATE_STATE, name, value});
export const updateAvailabilitySertificateAC = () => ({type: AVAILABILITY_SERTIFICATE});

// Thunks
// Set in state firms names and id
export const setFirmsName = () => (dispatch) => {
  dataAPI.getFirms().then(data => {
    let firms = [];
    data.map(item => firms.push({
      idFirm: item.id_firm, 
      nameFirm: item.name
    }));
    dispatch(setFirmsNameAC(firms));
  })
}

// Set in state cars brand
export const setBrandsName = () => (dispatch) => {
  dataAPI.getCarsBrand().then(data => {
    let brands = [];
    data.map(item => brands.push({
      brand: item.brand
    }));
    dispatch(setBrandsNameAC(brands));
  })
}

// Set in state cars model
export const setModelsName = (brand) => (dispatch) => {
  dataAPI.getCarsModel(brand).then(data => {
    let models = [];
    data.map(item => models.push({
      idModel: item.id_model,
      model: item.model
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
  dataAPI.postCreateCar(...data).then(data => {
    console.log(data);
  })
}

export default aparkReducer;