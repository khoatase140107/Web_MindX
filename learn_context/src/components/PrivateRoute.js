import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthenContext } from "../Context/AuthenContext/authenContext";

function PrivateRoute({ component }) {
  const { state } = useAuthenContext();
  const { isAuthenticated } = state;
  return isAuthenticated ? component : <Navigate to="/login" />;
}

export default PrivateRoute;
