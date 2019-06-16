import { LOAD_CONSTRUCTORS } from "../constants/action-types";

export const constructorsMiddleware = ({ dispatch }) => {
    return next => {
        return action => {
            switch (action.type) {
                case LOAD_CONSTRUCTORS:
                    console.log("Loading all constructors.");
                    return next(action);
                default:
                    return next(action);
            }
        };
    };
};
