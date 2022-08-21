import React, { useEffect } from "react";
import { useAuthenContext } from "../../Context/AuthenContext/authenContext";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../Context/types";
const initialValue = {
  username: "",
  password: "",
};

function HomePage(props) {
  const { state, dispatch } = useAuthenContext();
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const action = {
      type: LOGOUT,
      payload: initialValue,
    };
    dispatch(action);
    navigate("/login");
  };

  useEffect(() => {
    if (state.isAuthenticated) {
      navigate("/");
    }
  },[]);

  return (
    <div>
      HomePage
      <form onSubmit={onSubmitHandler}>
        <input type="submit" value="Logout" />
      </form>
    </div>
  );
}

export default HomePage;
