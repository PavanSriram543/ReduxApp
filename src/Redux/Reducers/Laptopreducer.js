import { BUY_LAPTOP } from "../actions/actionTypes";

const initialState = {
  NumberofLaps: 100,
};

const laptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LAPTOP:
      return { NumberofLaps: state.NumberofLaps - 1 };
    default:
      return state;
  }
};

export default laptopReducer;
