import {User} from "../../../types";
import {SET_MEMBER} from "../actions/actionTypes";

const initialState: {
  member: User;
} = {
  member: {
    id: "",
    name: "",
    email: "",
    appleId: "",
    facebookId: "",
    googleId: "",
  },
};

function memberReducers(state = initialState, action: any) {
  switch (action.type) {
    case SET_MEMBER:
      return {...state, member: action.payload.user};

    default:
      return state;
  }
}
export default memberReducers;
