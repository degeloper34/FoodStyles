import {LoginWithEmailResponseModel} from "../../../types";
import {SET_MEMBER} from "./actionTypes";

export const setMember = (payload: LoginWithEmailResponseModel) => {
  return {
    type: SET_MEMBER,
    payload,
  };
};
