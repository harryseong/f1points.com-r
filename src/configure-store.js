import {
  createStore,
  applyMiddleware,
  combineReducers
} from "../../../Library/Caches/typescript/3.4.5/node_modules/redux";
import driversReducer from "./reducers/drivers";
import driversMiddleware from "./middleware/drivers";
import thunk from "redux-thunk";
import { standingsMiddleware } from "./middleware/standings";
import standingsReducer from "./reducers/standings";
import { composeWithDevTools } from "redux-devtools-extension";
import { constructorsReducer } from "./reducers/constructors";
import { constructorsMiddleware } from "./middleware/constructors";

const middlewares = [
  driversMiddleware,
  constructorsMiddleware,
  standingsMiddleware,
  thunk
];
const middlewareEnhancer = applyMiddleware(...middlewares);

const rootReducers = combineReducers({
  constructors: constructorsReducer,
  drivers: driversReducer,
  standings: standingsReducer
});

export const store = createStore(
  rootReducers,
  composeWithDevTools(middlewareEnhancer)
);
