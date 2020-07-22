import { dataAPI } from "../../api/api";

const SET_FIRMS_DATA = 'SET_FIRMS_DATA'

let initialState ={
  firms: []
}

const firmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRMS_DATA:
      return {
        ...state,
        firms: action.firms
      }
  
    default:
      return state;
  }
} 

// AC
const setFirmsDataAC = (firms) => ({type: SET_FIRMS_DATA, firms});

// Thunks
export const setFirmsData = () => (dispatch) => {
  dataAPI.getFirms().then(data => {
    dispatch(setFirmsDataAC(data))
  })
}

export default firmsReducer;