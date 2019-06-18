import { LOAD_CURRENT_DRIVERS } from "../constants/action-types";
import { API_URL } from "../constants/api-urls";

export const getAllDrivers = () => {
  return async dispatch => {
    const rsp = await fetch(API_URL.ergast.current.drivers);
    const json = await rsp.json();
    dispatch({
      type: LOAD_CURRENT_DRIVERS,
      payload: json.MRData.DriverTable.Drivers
    });
  };
};
