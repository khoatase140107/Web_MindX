import { LOGIN } from "../types";

export const initialState = {
  userInfor: null,
  isAuthenticated: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        userInfor: payload,
      };
    default:
      return {
        ...state,
        isAuthenticated: false,
        userInfor: payload,
      };
  }
};

export default reducer;
