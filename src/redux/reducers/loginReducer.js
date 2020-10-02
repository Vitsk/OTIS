import { userAPI } from "../../api/api";
import { LOGIN_USER, LOGOUT_USER, UPDATE_EMAIL, UPDATE_PASS, ERROR } from '../actionCreators';

let initialState = {
  isLogin: false,
  inputEmail: '',
  inputPass: '',
  showAlert: false,
  isError: false,
  alertText: '',
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

    case ERROR:
      return {
        ...state,
        isError: !state.isError,
        showAlert: !state.showAlert,
        alertText: action.text
      }

    default:
      return state;
  }
}

// AC
const loginUserAC = () => ({ type: LOGIN_USER });
const errorAC = (text) => ({ type: ERROR, text })
const logoutUserAC = () => ({ type: LOGOUT_USER });
export const updateEmailAC = (inputEmail) => ({ type: UPDATE_EMAIL, inputEmail });
export const updatePassAC = (inputPass) => ({ type: UPDATE_PASS, inputPass });

// Thunk
export const checkLoginData = (email, password) => (dispatch) => {
  userAPI.login(email, password).then(() => {
    dispatch(loginUserAC())
  }).catch(() => {
    dispatch(errorAC("Помилка при авторизації. Перевірте правильність введених даних"))
    setTimeout(() => {
      dispatch(errorAC())
    }, 3000);
  })
}

export const isLoginCheck = () => (dispatch) => {
  userAPI.getUserKey().then(data => {
    if(data !== 'Please, login') {
      dispatch(loginUserAC())
    }
  })
}

export const logout = () => (dispatch) => {
  userAPI.logoutRequest().then(() => dispatch(logoutUserAC()));
}

export default loginReducer;