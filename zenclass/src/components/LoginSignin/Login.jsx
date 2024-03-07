import React, { useContext } from "react";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

import DataContextProvider from "../../DataContext/DataContextProvider";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = () => {
  const {
    handleSubmitlogin,
    handleLoginEmail,
    handleLoginPassword,
    logemail,
    logpassword,
    logerror,
    loading,
  } = useContext(DataContextProvider);

  return (
    <div className="body-container">
      <form className="form-control login" onSubmit={handleSubmitlogin}>
        <p className="title">Login</p>
        <div className="input-field">
          <input
            required
            className="input"
            type="text"
            value={logemail}
            onChange={(e) => {
              handleLoginEmail(e.target.value);
            }}
          />
          <label className="label" htmlFor="input">
            Enter Email
          </label>
        </div>
        <div className="input-field">
          <input
            required
            className="input"
            type="password"
            value={logpassword}
            onChange={(e) => {
              handleLoginPassword(e.target.value);
            }}
          />
          <label className="label" htmlFor="input">
            Enter Password
          </label>
        </div>
        {logerror && <div className="error">{logerror}</div>}
        {loading ? (
          <CircularProgress />
        ) : (
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        )}
        <div>
          <span className="already">Dont have an account?</span>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
