import {isLoginCheck} from "./loginReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default :
      return state;
  }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
  const isLoginPromise = dispatch(isLoginCheck());
  Promise.all([isLoginPromise]).then(() => {
    dispatch(initializedSuccess());
  })
}

export default appReducer;