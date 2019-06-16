import {
    LOAD_DRIVER_STANDINGS,
    LOAD_CONSTRUCTOR_STANDINGS
} from "../constants/action-types";

export const standingsMiddleware = ({ dispatch }) => {
    return next => {
        return action => {
            switch (action.type) {
                case LOAD_DRIVER_STANDINGS:
                    console.log("Loading driver standings.");
                    return next(action);
                case LOAD_CONSTRUCTOR_STANDINGS:
                    console.log("Loading constructor standings.");
                    return next(action);
                default:
                    return next(action);
            }
        };
    };
};
