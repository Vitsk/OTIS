import { dataAPI } from '../../api/api';

const SET_USER_MAIN_INFO = 'SET_USER_MAIN_INFO';

let initialState = {
  userName: '-',
  dateOfReg: '-',
  firmName: '-',
  street: '-',
  telephoneNum: '-',
  email: '-',
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
        email: action.email
      }

    default:
      return state;
  }
}

// AC
const setUserMainInfoAC = (userName, dateOfReg, firmName, street, telephoneNum, email) => ({
  type: SET_USER_MAIN_INFO,
  userName, dateOfReg, firmName, street, telephoneNum, email
});

// Thunk
export const setUserMainInfo = () => (dispatch) => {
  dataAPI.getUserData().then(data => {
    dispatch(setUserMainInfoAC(`${data[0].first_name} ${data[0].second_name}`, data[0].dateOfReg, data[0].department, data[0].street, data[0].telephone_number, data[0].email))
  })
}

export default mainReducer;