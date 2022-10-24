import Cookies from "js-cookie";
import { login } from "../actions/action.type.constants";

const initialState = Cookies.get("userData") ? JSON.parse(Cookies.get("userData")) : {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
