import { dataAPI } from "../../api/api";

const SET_FIRMS_NAME = 'SET_FIRMS_VALUE';
const SET_BRANDS_NAME = 'SET_BRANDS_NAME';
const SET_MODELS_NAME = 'SET_MODELS_NAME';
const SET_TYPE_NAME = 'SET_TYPE_NAME';
const UPDATE_FIRM_ID = 'SET_FIRM_ID';
const UPDATE_BRAND_ID = 'UPDATE_BRAND_ID';
const UPDATE_MODEL_ID = 'UPDATE_MODEL_ID';
const UPDATE_VIN_CODE = 'UPDATE_VIN_CODE';
const UPDATE_STATE_NUM = 'UPDATE_STATE_NUM';
const UPDATE_DATE_OF_PASSING = 'UPDATE_DATE_OF_PASSING';
const UPDATE_NEXT_PASSING_DATE = 'UPDATE_NEXT_PASSING_DATE';
const AVAILABILITY_SERTIFICATE = 'AVAILABILITY_SERTIFICATE';
const UPDATE_DATE_OF_RECEIVING_SERTIFICATE = 'UPDATE_DATE_OF_RECEIVING_SERTIFICATE';
const UPDATE_NEXT_SERTIFICATION_DATE = 'UPDATE_NEXT_SERTIFICATION_DATE';

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
      
    case UPDATE_FIRM_ID:
      return {
        ...state,
        idFirm: action.idFirm
      }

    case UPDATE_BRAND_ID:
      return {
        ...state,
        brand: action.brand,
      }

    case UPDATE_MODEL_ID:
      return {
        ...state,
        model: action.model
      }

    case UPDATE_VIN_CODE:
      return {
        ...state,
        vinCode: action.vinCode
      }

    case UPDATE_STATE_NUM:
      return {
        ...state,
        stateNum: action.stateNum
      }

    case UPDATE_DATE_OF_PASSING:
      return {
        ...state,
        dateOfPassing: action.dateOfPassing
      }

    case UPDATE_NEXT_PASSING_DATE:
      return {
        ...state,
        nextPassingDate: action.nextPassingDate
      }

    case AVAILABILITY_SERTIFICATE:
      return {
        ...state,
        availabilitySertificate: !state.availabilitySertificate,
        disabled: !state.disabled
      }

    case UPDATE_DATE_OF_RECEIVING_SERTIFICATE:
      return {
        ...state,
        dateOfReceivingSertificate: action.dateOfReceivingSertificate
      }

    case UPDATE_NEXT_SERTIFICATION_DATE:
      return {
        ...state,
        nextSertificationDate: action.nextSertificationDate
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

export const updateFirmIdAC = (idFirm) => ({type: UPDATE_FIRM_ID, idFirm});
export const updateBrandsIdAC = (brand) => ({type: UPDATE_BRAND_ID, brand});
export const updateModelsIdAC = (model) => ({type: UPDATE_MODEL_ID, model});
export const updateVinCodeAC = (vinCode) => ({type: UPDATE_VIN_CODE, vinCode});
export const updateStateNumAC = (stateNum) => ({type: UPDATE_STATE_NUM, stateNum});
export const updateDateOfPassingAC = (dateOfPassing) => ({type: UPDATE_DATE_OF_PASSING, dateOfPassing});
export const updateNextPassingDateAC = (nextPassingDate) => ({type: UPDATE_NEXT_PASSING_DATE, nextPassingDate});
export const updateAvailabilitySertificateAC = () => ({type: AVAILABILITY_SERTIFICATE});
export const updateDateOfReceivingSertificateAC = (dateOfReceivingSertificate) => ({type: UPDATE_DATE_OF_RECEIVING_SERTIFICATE, dateOfReceivingSertificate});
export const updateNextSertificationDateAC = (nextSertificationDate) => ({type: UPDATE_NEXT_SERTIFICATION_DATE, nextSertificationDate});

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