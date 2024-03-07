import React, { useContext } from "react";
import "./Signup.css";
import DataContext from "../../DataContext/DataContextProvider";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    name,
    email,
    password,
    education,
    experience,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleEducationChange,
    handleExperienceChange,
    handleSubmit,
    loading,
  } = useContext(DataContext);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <span className="signup">Sign Up</span>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          className="form--input"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
        />

        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="form--input"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="form--input"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />

        <label htmlFor="education">Education:</label>
        <input
          type="text"
          id="education"
          placeholder="Enter your education"
          className="form--input"
          value={education}
          onChange={(e) => handleEducationChange(e.target.value)}
        />

        <label htmlFor="experience">Experience:</label>
        <input
          type="text"
          id="experience"
          placeholder="Enter your experience"
          className="form--input"
          value={experience}
          onChange={(e) => handleExperienceChange(e.target.value)}
        />

        {loading ? (
          <CircularProgress></CircularProgress>
        ) : (
          <button type="submit" className="form--submit">
            Sign up
          </button>
        )}
        <div className="backtologin">
          Already have a account <Link to="/login">signin</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
