import { userAPI } from "../../api/api";

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PASS = 'UPDATE_PASS';

let initialState = {
  isLogin: false,
  inputEmail: '',
  inputPass: '',
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogin: true
      }

    case LOGOUT_USER:
      return {
        ...state,
        isLogin: false
      }
    
    case UPDATE_EMAIL:
      return {
        ...state,
        inputEmail: action.inputEmail
      }

    case UPDATE_PASS:
      return {
        ...state,
        inputPass: action.inputPass
      }

    default:
      return state;
  }
}

// AC
const loginUserAC = () => ({ type: LOGIN_USER });
export const logoutUserAC = () => ({ type: LOGOUT_USER });
export const updateEmailAC = (inputEmail) => ({ type: UPDATE_EMAIL, inputEmail });
export const updatePassAC = (inputPass) => ({ type: UPDATE_PASS, inputPass });

// Thunk
export const checkLoginData = () => (dispatch) => {
  userAPI.login('example@mail.com', 'qwerty').then(data => {
    if (data === "Incorrect Data") {
      dispatch(loginUserAC())
    }
  })
}

export default loginReducer;