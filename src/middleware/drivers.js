import { LOAD_DRIVERS } from "../constants/action-types";

const driversMiddleware = ({ dispatch }) => {
    return next => {
        return action => {
            switch (action.type) {
                case LOAD_DRIVERS:
                    console.log("Loading all drivers");
                    return next(action);
                default:
                    return next(action);
            }
        };
    };
};

export default driversMiddleware;
