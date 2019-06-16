import {
    LOAD_DRIVER_STANDINGS,
    LOAD_CONSTRUCTOR_STANDINGS
} from "../constants/action-types";

const initialState = {
    standings: {
        drivers: [],
        constructors: []
    }
};

const standingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DRIVER_STANDINGS:
            return Object.assign({}, state, {
                standings: {
                    drivers: action.payload
                }
            });
        case LOAD_CONSTRUCTOR_STANDINGS:
            return Object.assign({}, state, {
                standings: {
                    constructor: action.payload
                }
            });
        default:
            return state;
    }
};

export default standingsReducer;
