import { dataAPI } from "../../api/api";

const SET_CARS = 'SET_CARS'

let initialState = {
  cars: [],
}

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS:
      return {
        ...state,
        cars: action.cars
      }

    default:
      return state;
  }
}

// AC
const setCarsAC = (cars) => ({ type: SET_CARS, cars })

// Thunks
export const setCars = () => (dispatch) => {
  dataAPI.getCars().then(data => {
    dispatch(setCarsAC(data))
  })
}

export default viewReducer;