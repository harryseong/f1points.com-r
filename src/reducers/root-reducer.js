import {
  LOAD_CURRENT_DRIVERS,
  LOAD_CURRENT_DRIVER_STANDINGS,
  LOAD_CURRENT_CONSTRUCTORS,
  LOAD_CURRENT_CONSTRUCTOR_STANDINGS
} from "../constants/action-types";

const initialState = {
  seasons: {
    current: {
      drivers: {},
      constructors: {},
      standings: {}
    }
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENT_DRIVERS:
      return Object.assign({}, state, {
        seasons: Object.assign({}, state.seasons, {
          current: Object.assign({}, state.seasons.current, {
            drivers: Object.assign(
              {},
              state.seasons.current.drivers,
              action.payload
            )
          })
        })
      });
    case LOAD_CURRENT_DRIVER_STANDINGS:
      return Object.assign({}, state, {
        seasons: Object.assign({}, state.seasons, {
          current: Object.assign({}, state.seasons.current, {
            drivers: Object.assign(
              {},
              state.seasons.current.drivers,
              action.payload
            )
          })
        })
      });
    case LOAD_CURRENT_CONSTRUCTORS:
      return Object.assign({}, state, {
        seasons: Object.assign({}, state.seasons, {
          current: Object.assign({}, state.seasons.current, {
            drivers: Object.assign(
              {},
              state.seasons.current.drivers,
              action.payload
            )
          })
        })
      });
    case LOAD_CURRENT_CONSTRUCTOR_STANDINGS:
      return Object.assign({}, state, {
        seasons: Object.assign({}, state.seasons, {
          current: Object.assign({}, state.seasons.current, {
            drivers: Object.assign(
              {},
              state.seasons.current.drivers,
              action.payload
            )
          })
        })
      });
    default:
      return state;
  }
};

export default rootReducer;
