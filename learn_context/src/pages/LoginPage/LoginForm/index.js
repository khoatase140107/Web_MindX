import React, { useState } from "react";
import { useAuthenContext } from "../../../Context/AuthenContext/authenContext";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../../Context/types";
const initialValue = {
  username: "",
  password: "",
};

const BASIC_ADMIN = {
  username: "admin",
  password: "admin",
};

function LoginForm(props) {
  const [user, setUser] = useState(initialValue);
  const { dispatch } = useAuthenContext();
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { username, password } = user;
    if (
      username === BASIC_ADMIN.username &&
      password === BASIC_ADMIN.password
    ) {
      const action = {
        type: LOGIN,
        payload: user,
      };
      dispatch(action);
      navigate("/");
    } else {
      alert("Thong tin dang nhap sai");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            name="username"
            onChange={onChangeHandler}
            value={user.username}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={onChangeHandler}
            value={user.password}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginForm;
