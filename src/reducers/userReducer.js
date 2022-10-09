import { login } from "../actions/action.type.constants";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
