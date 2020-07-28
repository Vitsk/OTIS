import { dataAPI } from "../../api/api";

const SET_CARS = 'SET_CARS';
const SET_CHOOSEN_CAR = 'SET_CHOOSEN_CAR';
const SET_BRANDS_NAME = 'SET_BRANDS_NAME';
const SET_MODELS_NAME = 'SET_MODELS_NAME';
const SET_TYPE_NAME = 'SET_TYPE_NAME';
const SET_USER_EMAIL = 'SET_USER_EMAIL';
const SET_FIRM_EMAIL = 'SET_FIRM_EMAIL';
const UPDATE_BRAND_ID = 'UPDATE_BRAND_ID';
const UPDATE_MODEL_ID = 'UPDATE-MODEL-ID';
const UPDATE_VIN_CODE = 'UPDATE_VIN_CODE';
const UPDATE_STATE_NUM = 'UPDATE_STATE_NUM';
const UPDATE_DATE_OF_PASSING = 'UPDATE_DATE_OF_PASSING';
const UPDATE_NEXT_PASSING_DATE = 'UPDATE_NEXT_PASSING_DATE';
const UPDATE_DATE_OF_RECEIVING_SERTIFICATE = 'UPDATE_DATE_OF_RECEIVING_SERTIFICATE';
const UPDATE_NEXT_SERTIFICATION_DATE = 'UPDATE_NEXT_SERTIFICATION_DATE';
const AVAILABILITY_SERTIFICATE = 'AVAILABILITY_SERTIFICATE';

let initialState = {
  cars: [],
  choosenCar: {
    brands: [],
    models: [],
    firmName: '',
    telephoneNum: '',
    brand: '',
    model: '',
    carType: '',
    vinCode: '',
    stateNum: '',
    dateOfPassing: '',
    nextPassingDate: '',
    dateOfReceivingSertificate: '',
    nextSertificationDate: '',
    availabilitySertificate: false,
    disabled: true
  },
  emails: {
    userEmail: '',
    firmEmail: '',
  },
}

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS:
      return {
        ...state,
        cars: action.cars
      }

    case SET_CHOOSEN_CAR:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          firmName: action.firmName,
          telephoneNum: action.telephoneNum,
          brand: action.brand,
          model: action.model,
          vinCode: action.vinCode,
          stateNum: action.stateNum,
          dateOfPassing: action.dateOfPassing,
          nextPassingDate: action.nextPassingDate,
          dateOfReceivingSertificate: action.dateOfReceivingSertificate,
          nextSertificationDate: action.nextSertificationDate,
          availabilitySertificate: action.nextSertificationDate === '0000-00-00' ? false : true,
          disabled: action.nextSertificationDate === '0000-00-00' ? true : false
        }
      }

    case SET_USER_EMAIL:
      return {
        ...state,
        emails: {
          ...state.emails,
          userEmail: action.userEmail
        }
      }

    case SET_FIRM_EMAIL:
      return {
        ...state,
        emails: {
          ...state.emails,
          firmEmail: action.firmEmail
        }
      }

    case SET_BRANDS_NAME:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          brands: action.brands
        }
      }

    case SET_MODELS_NAME:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          models: action.models,
        }
      }

    case SET_TYPE_NAME:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          carType: action.carType
        }
      }

    case UPDATE_BRAND_ID:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          brand: action.brand,
          carType: '',
        }
      }

    case UPDATE_MODEL_ID:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          model: action.model
        }
      }

    case UPDATE_VIN_CODE:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          vinCode: action.vinCode
        }
      }

    case UPDATE_STATE_NUM:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          stateNum: action.stateNum
        }
      }

    case UPDATE_DATE_OF_PASSING:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          dateOfPassing: action.dateOfPassing
        }
      }

    case UPDATE_NEXT_PASSING_DATE:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          nextPassingDate: action.nextPassingDate
        }
      }

    case UPDATE_DATE_OF_RECEIVING_SERTIFICATE:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          dateOfReceivingSertificate: action.dateOfReceivingSertificate
        }
      }

    case UPDATE_NEXT_SERTIFICATION_DATE:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          nextSertificationDate: action.nextSertificationDate
        }
      }

    case AVAILABILITY_SERTIFICATE:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          availabilitySertificate: !state.choosenCar.availabilitySertificate,
          disabled: !state.choosenCar.disabled
        }
      }

    default:
      return state;
  }
}

// AC
const setCarsAC = (cars) => ({ type: SET_CARS, cars })
const setChoosenCarAC = (car) => ({
  type: SET_CHOOSEN_CAR,
  firmName: car.name, telephoneNum: car.telephone, brand: car.brand, model: car.id_model, vinCode: car.vin_code, stateNum: car.registration_number,
  dateOfPassing: car.date_of_passing, nextPassingDate: car.next_passing_date,
  dateOfReceivingSertificate: car.date_of_receiving_sertificate,
  nextSertificationDate: car.next_sertification_date
})
const setBrandsNameAC = (brands) => ({ type: SET_BRANDS_NAME, brands });
const setModelsNameAC = (models) => ({ type: SET_MODELS_NAME, models });
const setTypeNameAC = (carType) => ({ type: SET_TYPE_NAME, carType });
const setUserEmailAC = (userEmail) => ({ type: SET_USER_EMAIL, userEmail });
const setFirmEmailAC = (firmEmail) => ({ type: SET_FIRM_EMAIL, firmEmail });

export const updateBrandsIdAC = (brand) => ({ type: UPDATE_BRAND_ID, brand });
export const updateModelsIdAC = (model) => ({ type: UPDATE_MODEL_ID, model });
export const updateVinCodeAC = (vinCode) => ({ type: UPDATE_VIN_CODE, vinCode });
export const updateStateNumAC = (stateNum) => ({ type: UPDATE_STATE_NUM, stateNum });
export const updateDateOfPassingAC = (dateOfPassing) => ({ type: UPDATE_DATE_OF_PASSING, dateOfPassing });
export const updateNextPassingDateAC = (nextPassingDate) => ({ type: UPDATE_NEXT_PASSING_DATE, nextPassingDate });
export const updateDateOfReceivingSertificateAC = (dateOfReceivingSertificate) => ({ type: UPDATE_DATE_OF_RECEIVING_SERTIFICATE, dateOfReceivingSertificate });
export const updateNextSertificationDateAC = (nextSertificationDate) => ({ type: UPDATE_NEXT_SERTIFICATION_DATE, nextSertificationDate });
export const updateAvailabilitySertificateAC = () => ({ type: AVAILABILITY_SERTIFICATE });



// Thunks
export const setCars = () => (dispatch) => {
  dataAPI.getCars().then(data => {
    dispatch(setCarsAC(data))
  })
}

export const getChoosenCar = (stateNum) => (dispatch) => {
  dataAPI.getChoosenCar(stateNum).then(data => {
    dispatch(setChoosenCarAC(data[0]))
  });
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
      model: item.model,
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

// Set emails 
export const setUserEmail = () => (dispatch) => {
  dataAPI.getUserData().then(data => {
    dispatch(setUserEmailAC(data[0].email));
  })
}

export const setFirmEmail = (firmName) => (dispatch) => {
  dataAPI.getFirms().then(data => {
    
    data.map(item => {
      return firmName === item.name ? dispatch(setFirmEmailAC(item.email)) : ''
    })
  })
}

export default viewReducer;