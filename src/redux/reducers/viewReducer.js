import { dataAPI } from "../../api/api";

const SET_CARS = 'SET_CARS';
const SET_CHOOSEN_CAR = 'SET_CHOOSEN_CAR';
const SET_BRANDS_NAME = 'SET_BRANDS_NAME';
const SET_MODELS_NAME = 'SET_MODELS_NAME';
const SET_TYPE_NAME = 'SET_TYPE_NAME';
const SET_USER_EMAIL = 'SET_USER_EMAIL';
const SET_FIRM_EMAIL = 'SET_FIRM_EMAIL';
const SET_FIRM_PHONE = 'SET_FIRM_PHONE';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_BRAND_ID = 'UPDATE_BRAND_ID';
const AVAILABILITY_SERTIFICATE = 'AVAILABILITY_SERTIFICATE';

let initialState = {
  isFetching: true,
  cars: [],
  choosenCar: {
    brands: [],
    models: [],
    firmName: '',
    telephoneNum: '',
    brand: '',
    model: '',
    modelName: '',
    carType: '',
    vinCode: '',
    prevStateNum: '',
    nextStateNum: '',
    dateOfPassing: '',
    nextPassingDate: '',
    dateOfReceivingSertificate: '',
    nextSertificationDate: '',
    availabilitySertificate: false,
    disabled: true
  },
  emailData: {
    department: '',
    userEmail: '',
    telephoneNum: '',
    street: '',
    webSite: '',
    firmEmail: '',
  },
  smsData: {
    smsLogin: '',
    smsPass: '',
    smsApiKey: '',
    smsAlphaName: '',
  }
}

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS:
      return {
        ...state,
        isFetching: false,
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
          modelName: action.modelName,
          vinCode: action.vinCode,
          prevStateNum: action.stateNum,
          nextStateNum: action.stateNum,
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
        emailData: {
          ...state.emailData,
          userEmail: action.userEmail,
          department: action.department,
          telephoneNum: action.telephoneNum,
          street: action.street,
          webSite: action.webSite
        },
        smsData: {
          ...state.smsData,
          smsLogin: action.smsLogin,
          smsPass: action.smsPass,
          smsApiKey: action.smsApiKey,
          smsAlphaName: action.smsAlphaName,
        }
      }

    case SET_FIRM_EMAIL:
      return {
        ...state,
        emailData: {
          ...state.emailData,
          firmEmail: action.firmEmail,
        }
      }

    case SET_FIRM_PHONE:
      return {
        ...state,
        smsData: {
          ...state.smsData,
          firmPhone: action.firmPhone,
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

    case UPDATE_STATE:
      return {
        ...state,
        choosenCar: {
          ...state.choosenCar,
          [action.name]: action.value
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
  firmName: car.name, telephoneNum: car.telephone, brand: car.brand, model: car.id_model, modelName: car.model, vinCode: car.vin_code, stateNum: car.registration_number,
  dateOfPassing: car.date_of_passing, nextPassingDate: car.next_passing_date,
  dateOfReceivingSertificate: car.date_of_receiving_sertificate,
  nextSertificationDate: car.next_sertification_date
})
const setBrandsNameAC = (brands) => ({ type: SET_BRANDS_NAME, brands });
const setModelsNameAC = (models) => ({ type: SET_MODELS_NAME, models });
const setTypeNameAC = (carType) => ({ type: SET_TYPE_NAME, carType });

const setUserDataAC = (userEmail, department, telephoneNum, street, webSite, smsLogin, smsPass, smsApiKey, smsAlphaName) => (
    { type: SET_USER_EMAIL, userEmail, department, telephoneNum, street, webSite, smsLogin, smsPass, smsApiKey, smsAlphaName }
  );
const setFirmEmailAC = (firmEmail) => ({ type: SET_FIRM_EMAIL, firmEmail });
const setFirmPhoneAC = (firmPhone) => ({ type: SET_FIRM_PHONE, firmPhone })

export const updateStateAC = (name, value) => ({ type: UPDATE_STATE, name, value })
export const updateBrandsIdAC = (brand) => ({ type: UPDATE_BRAND_ID, brand });
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
export const setUserData = () => (dispatch) => {
  dataAPI.getUserData().then(data => {
    dispatch(setUserDataAC(data[0].email, data[0].department, data[0].telephone_number, data[0].street, data[0].web_site,
      data[0]['sms-login'], data[0]['sms-pass'], data[0]['sms-api-key'], data[0]['sms-alpha-name']));
  })
}

export const setFirmEmail = (firmName) => (dispatch) => {
  dataAPI.getFirms().then(data => {
    data.map(item => {
      return firmName === item.name ? dispatch(setFirmEmailAC(item.email)) : '';
    })
  })
}

export const setFirmPhone = (firmName) => (dispatch) => {
  dataAPI.getFirms().then(data => {
    data.map(item => {
      return firmName === item.name ? dispatch(setFirmPhoneAC(item.telephone)) : '';
    })
  })
}

// API Request
export const editRequest = (...data) => (dispatch) => {
  dataAPI.putEditRequest(...data).then(res => {
    console.log(res);
  })
}

export const emailRequest = (...data) => (dispatch) => {
  dataAPI.postSendEmailRequest(...data)
}

export const smsRequest = (...data) => (dispatch) => {
  dataAPI.postSendSmsRequest(...data)
}

export const deleteRequest = (stateNum) => (dispatch) => {
  dataAPI.deleteCarRequest(stateNum)
}

export default viewReducer;