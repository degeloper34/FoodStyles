import {SET_TEST} from "./actionTypes";

export const test = (payload: number) => {
  return {
    type: SET_TEST,
    payload,
  };
};
