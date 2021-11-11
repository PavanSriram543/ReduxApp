import { BUY_MOBILE } from "../actions/actionTypes";

const initialState = {
  NumberofMobile: 100,
};

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MOBILE:
      return { NumberofMobile: state.NumberofMobile - 1 };
    default:
      return state;
  }
};

export default mobileReducer;
