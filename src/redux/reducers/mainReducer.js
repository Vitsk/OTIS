import { dataAPI } from '../../api/api';
import { SET_USER_MAIN_INFO, SET_FIRMS_COUNT, SET_CARS_COUNT, SET_TO_COUNT,
  SET_SERT_COUNT, SET_ALL_TO_COUNT, SET_ALL_SERT_COUNT } from "../actionCreators";

let initialState = {
  userName: '-',
  dateOfReg: '-',
  firmName: '-',
  street: '-',
  telephoneNum: '-',
  email: '-',
  firmsCount: '-',
  carsCount: '-',
  sumThirtyTO: '-',
  sumFourteenTO: '-',
  sumThirtySert: '-',
  sumFourteenSert: '-',
  allTOCount: '-',
  sertCount: '-',
  balance: '-'
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_MAIN_INFO:
      return {
        ...state,
        userName: action.userName,
        dateOfReg: action.dateOfReg,
        firmName: action.firmName,
        street: action.street,
        telephoneNum: action.telephoneNum,
        email: action.email,
        balance: action.balance === null ? '-' : action.balance
      }

    case SET_FIRMS_COUNT:
      return {
        ...state,
        firmsCount: action.firmsCount
      }

    case SET_CARS_COUNT:
      return {
        ...state,
        carsCount: action.carsCount
      }

    case SET_TO_COUNT:
      return {
        ...state,
        sumThirtyTO: action.sumThirtyTO,
        sumFourteenTO: action.sumFourteenTO
      }

    case SET_SERT_COUNT:
      return {
        ...state,
        sumThirtySert: action.sumThirtySert,
        sumFourteenSert: action.sumFourteenSert
      }

    case SET_ALL_TO_COUNT:
      return {
        ...state,
        allTOCount: action.allTOCount
      }

    case SET_ALL_SERT_COUNT:
      return {
        ...state,
        sertCount: action.sertCount
      }

    default:
      return state;
  }
}

// AC
const setUserMainInfoAC = (userName, dateOfReg, firmName, street, telephoneNum, email, balance) => ({
  type: SET_USER_MAIN_INFO,
  userName, dateOfReg, firmName, street, telephoneNum, email, balance
});
const setFirmsCountAC = (firmsCount) => ({ type: SET_FIRMS_COUNT, firmsCount })
const setCarsCountAC = (carsCount) => ({ type: SET_CARS_COUNT, carsCount })
const setTOcountAC = (sumThirtyTO, sumFourteenTO) => ({ type: SET_TO_COUNT, sumThirtyTO, sumFourteenTO })
const setSertCountAC = (sumThirtySert, sumFourteenSert) => ({ type: SET_SERT_COUNT, sumThirtySert, sumFourteenSert })
const setSertificateCountAC = (sertCount) => ({ type: SET_ALL_SERT_COUNT, sertCount })
const setAllTOCountAC = (allTOCount) => ({ type: SET_ALL_TO_COUNT, allTOCount })


// Thunks
export const setUserMainInfo = () => (dispatch) => {
  dataAPI.getUserData().then(data => {
    dispatch(setUserMainInfoAC(`${data[0].first_name} ${data[0].second_name}`, data[0].dateOfReg, data[0].department, data[0].street, data[0].telephone_number, data[0].email, data[0].balance))
  })
}

export const setFirmsCount = () => (dispatch) => {
  dataAPI.getFirmsCount().then(data => {
    dispatch(setFirmsCountAC(data))
  })
}

export const setCarsCount = () => (dispatch) => {
  dataAPI.getCarsCount().then(data => {
    dispatch(setCarsCountAC(data[0].count))
  })
}

export const setTOcount = () => (dispatch) => {
  dataAPI.getAllCars().then(data => {
    let sumThirtyTO = 0;
    let sumFourteenTO = 0;

    let currentDate = new Date();
    data.map(item => {
      let dateFormat = new Date(item.next_passing_date);
      let count = Math.ceil((dateFormat - currentDate) / (1000 * 3600 * 24));
      if (count < 30) {
        sumThirtyTO++;
      }
      if (count <= 0) {
        sumThirtyTO--;
      }

      if (count < 14) {
        sumFourteenTO++;
      }
      if (count <= 0) {
        sumFourteenTO--;
      }
      return count;
    })

    dispatch(setTOcountAC(sumThirtyTO, sumFourteenTO))
  })
}

export const setSertCount = () => (dispatch) => {
  dataAPI.getAllCars().then(data => {
    let sumThirtySert = 0;
    let sumFourteenSert = 0;

    let currentDate = new Date();
    data.map(item => {
      if (item.date_of_receiving_sertificate !== '0000-00-00' || item.next_sertification_date !== '0000-00-00') {
        let dateFormat = new Date(item.next_sertification_date);
        let count = Math.ceil((dateFormat - currentDate) / (1000 * 3600 * 24));
        if (count < 30) {
          sumThirtySert++;
        }
        if (count <= 0) {
          sumThirtySert--;
        }

        if (count < 14) {
          sumFourteenSert++;
        }
        if (count <= 0) {
          sumFourteenSert--;
        }
      }
      return 0;
    })

    dispatch(setSertCountAC(sumThirtySert, sumFourteenSert))
  })
}

export const setSertificateCount = () => (dispatch) => {
  dataAPI.getAllCars().then(data => {
    let sum = 0;
    data.map(item => {
      if (item.date_of_receiving_sertificate !== '0000-00-00' || item.next_sertification_date !== '0000-00-00') {
        sum++;
      }
      return 0;
    })
    
    dispatch(setSertificateCountAC(sum))
  })
}

export const setAllTOCount = () => (dispatch) => {
  dataAPI.getAllCars().then(data => {
    let sum = 0;
    data.map(item => {
      if (item.date_of_passing !== '0000-00-00' || item.next_passing_date !== '0000-00-00') {
        sum++;
      }
      return 0;
    })
    
    dispatch(setAllTOCountAC(sum))
  })
}

export default mainReducer;