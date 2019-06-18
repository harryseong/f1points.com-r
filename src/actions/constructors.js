import { API_URL } from "../constants/api-urls";
import { LOAD_CURRENT_CONSTRUCTORS } from "../constants/action-types";

export const getAllConstructors = () => {
  return async dispatch => {
    const rsp = await fetch(API_URL.ergast.current.constructors);
    const json = await rsp.json();
    dispatch({
      type: LOAD_CURRENT_CONSTRUCTORS,
      payload: json.MRData.ConstructorTable.Constructors
    });
  };
};
