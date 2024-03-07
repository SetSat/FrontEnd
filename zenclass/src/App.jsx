import { useState, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import "./App.css";
import Login from "./components/LoginSignin/Login";
import Signup from "./components/Signup/Signup";
import Navbars from "./components/Navbar/Navbars";
import Class from "./components/LoginSignin/class/Class";
import Task from "./components/task/Task";
import Webcode from "./components/webcode/Webcode";
import Capstone from "./components/capstone/Capstone";
import Queries from "./components/queries/Queries";
import Requirement from "./components/requirement/Requirement";
import Portfolio from "./components/portfolio/Portfolio";
import Application from "./components/application/Application";
import Interviewtask from "./components/interviewtask/Interviewtask";
import Leave from "./components/leave/Leave";
import Mock from "./components/mock/Mock";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Syllabus from "./components/syllabus/Syllabus";
import Dashboard from "./components/dashboard/Dashboard";

import Certificate from "./components/certificate/Certificate";
import DataContext from "./DataContext/DataContextProvider";
function App() {
  const { loggedin, setloggedin } = useContext(DataContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setloggedin(true);
    }
  }, []);

  return (
    <div>
      {loggedin && <Navbars></Navbars>}
      <Routes>
        {!loggedin && <Route exact path="/" element={<Login></Login>}></Route>}
        {!loggedin && <Route exact path="/login" element={<Login />}></Route>}
        {!loggedin && <Route exact path="/signup" element={<Signup />}></Route>}

        {loggedin && (
          <Route
            exact
            path="/dashboard"
            element={<Dashboard></Dashboard>}
          ></Route>
        )}
        {loggedin && (
          <Route exact path="/class" element={<Class></Class>}></Route>
        )}
        {loggedin && <Route exact path="/task" element={<Task></Task>}></Route>}
        {loggedin && (
          <Route exact path="/webcode" element={<Webcode></Webcode>}></Route>
        )}
        {loggedin && (
          <Route exact path="/capstone" element={<Capstone></Capstone>}></Route>
        )}
        {loggedin && (
          <Route exact path="/queries" element={<Queries></Queries>}></Route>
        )}
        {loggedin && (
          <Route
            exact
            path="/requirements"
            element={<Requirement></Requirement>}
          ></Route>
        )}
        {loggedin && (
          <Route
            exact
            path="/portfolio"
            element={<Portfolio></Portfolio>}
          ></Route>
        )}
        {loggedin && (
          <Route
            exact
            path="/application"
            element={<Application></Application>}
          ></Route>
        )}
        {loggedin && (
          <Route
            exact
            path="/interviewtasks"
            element={<Interviewtask></Interviewtask>}
          ></Route>
        )}
        {loggedin && (
          <Route exact path="/leave" element={<Leave></Leave>}></Route>
        )}
        {loggedin && <Route exact path="/mock" element={<Mock></Mock>}></Route>}
        {loggedin && (
          <Route
            exact
            path="/certificate"
            element={<Certificate></Certificate>}
          ></Route>
        )}
        {loggedin && (
          <Route
            exact
            path="/leaderboard"
            element={<Leaderboard></Leaderboard>}
          ></Route>
        )}
        {loggedin && (
          <Route exact path="/syllabus" element={<Syllabus></Syllabus>}></Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
