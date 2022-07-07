import {SET_TEST} from "../actions/actionTypes";

const initialState: {
  testValue: number;
} = {
  testValue: -1,
};

function memberReducers(state = initialState, action: any) {
  switch (action.type) {
    case SET_TEST:
      return {...state, testValue: action.payload};

    default:
      return state;
  }
}
export default memberReducers;
