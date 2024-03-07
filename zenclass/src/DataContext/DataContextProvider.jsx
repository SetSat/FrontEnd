import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Alert from "@mui/material/Alert";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
  const [logemail, setlogEmail] = useState("");
  const [logpassword, setlogPassword] = useState("");
  const [loggedin, setloggedin] = useState(false);
  const [finaltoken, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [logerror, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setToken(decodedToken);
    }
  }, []);

  const handleLoginEmail = (value) => {
    setlogEmail(value);
  };

  const navtoLogin = () => {
    navigate("/login");
  };

  const navtoClass = () => {
    navigate("/class");
  };

  const handleLoginPassword = (value) => {
    setlogPassword(value);
  };

  const handleSubmitlogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://capstone-x52g.onrender.com/auth/login",
        {
          logemail,
          logpassword,
        }
      );
      console.log("API Response:", response.data);
      if (response.status === 400) {
        console.log("Invalid email or password");

        navtoLogin();
      }

      if (response.data) {
        setLoading(false);
        const { token } = response.data;
        localStorage.setItem("token", token);
        const finaltoken = jwtDecode(token);
        setToken(finaltoken);
        setloggedin(true);
        setlogEmail("");
        setlogPassword("");
        navtoClass();
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.error("Login Error:", error.message);
    }
  };
  const logoutfunction = () => {
    localStorage.removeItem("token");
    setloggedin(false);
    setToken(null);
    navtoLogin();
  };

  useEffect(() => {
    if (finaltoken) {
      console.log("Name from token", finaltoken.user.name);
    }
  }, [finaltoken]);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const handleEducationChange = (value) => {
    setEducation(value);
  };

  const handleExperienceChange = (value) => {
    setExperience(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://capstone-x52g.onrender.com/auth/signup",
        {
          name,
          email,
          password,
          education,
          experience,
        }
      );

      console.log("API Response:", response.data);
      setName("");
      setEmail("");
      setPassword("");
      setEducation("");
      setExperience("");
      setConfirmPassword("");
      setlogEmail("");
      setlogPassword("");
      setLoading(false);
      navtoLogin();
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  const dataContextValue = {
    name,
    email,
    password,
    confirmPassword,
    education,
    experience,
    subscribeToNewsletter,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleEducationChange,
    handleExperienceChange,
    handleSubmit,
    handleSubmitlogin,
    handleLoginEmail,
    handleLoginPassword,
    setloggedin,
    loggedin,
    logemail,
    setlogEmail,
    logpassword,
    setlogPassword,
    finaltoken,
    logoutfunction,
    setLoading,
    logerror,
    loading,
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
      {showAlert && (
        <Alert
          variant="filled"
          severity="warning"
          sx={{
            position: "fixed",
            bottom: 16,
            left: 50,
            zIndex: 9999,
          }}
          onClose={() => setShowAlert(false)}
        >
          {`Welcome ${finaltoken.user.name}`}
        </Alert>
      )}
    </DataContext.Provider>
  );
};

export default DataContext;
