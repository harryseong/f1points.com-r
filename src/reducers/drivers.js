import { LOAD_DRIVERS, LOAD_CURRENT_DRIVERS } from "../constants/action-types";

const initialState = { drivers: [] };

const driversReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENT_DRIVERS:
      return Object.assign({}, state, {
        drivers: action.payload
      });
    default:
      return state;
  }
};

export default driversReducer;
