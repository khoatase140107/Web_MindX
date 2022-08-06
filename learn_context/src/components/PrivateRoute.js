import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthenContext } from "../Context/AuthenContext";

function PrivateRoute({ component }) {
  const authenCtx = useAuthenContext();
  const { isAuthenticated } = authenCtx;
  return isAuthenticated ? component : <Navigate to="/login" />;
}

export default PrivateRoute;
