import { useReducer } from "react";
import { AuthenContext } from "./authenContext";
import reducer, { initialState } from "./authenReducer";

const AuthenState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthenContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </AuthenContext.Provider>
  );
};

export default AuthenState;
