import { LOAD_CURRENT_CONSTRUCTORS } from "../constants/action-types";

const initialState = {
  constructors: []
};

export const constructorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENT_CONSTRUCTORS:
      return Object.assign({}, state, {
        constructors: action.payload
      });
    default:
      return state;
  }
};
