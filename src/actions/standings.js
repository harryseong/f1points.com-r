import {
  LOAD_DRIVER_STANDINGS,
  LOAD_CONSTRUCTOR_STANDINGS
} from "../constants/action-types";
import { API_URL } from "../constants/api-urls";

export const getDriverStandings = () => {
  return async dispatch => {
    const rsp = await fetch(API_URL.ergast.current.driverStandings);
    const json = await rsp.json();
    dispatch({
      type: LOAD_DRIVER_STANDINGS,
      payload: json.MRData.StandingsTable.StandingsLists[0].DriverStandings
    });
  };
};

export const getConstructorStandings = () => {
  return async dispatch => {
    const rsp = await fetch(API_URL.ergast.current.constructorStandings);
    const json = await rsp.json();
    dispatch({
      type: LOAD_CONSTRUCTOR_STANDINGS,
      payload: json.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
    });
  };
};
