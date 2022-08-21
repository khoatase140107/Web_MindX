import { createContext, useContext } from "react";



export const AuthenContext = createContext();


export const useAuthenContext = () => {
  const authenCtx = useContext(AuthenContext);
  return authenCtx;
};


