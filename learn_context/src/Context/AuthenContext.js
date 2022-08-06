import { createContext, useContext } from "react";

const initialState = {
  userInfor: null,
  isAuthenticated: false,
};

const AuthenContext = createContext();

const AuthenContextProvider = (props) => {
  return (
    <AuthenContext.Provider value={initialState}>
      {props.children}
    </AuthenContext.Provider>
  );
};

export const useAuthenContext = () => {
  const authenCtx = useContext(AuthenContext);
  return authenCtx;
};

export default AuthenContextProvider;
