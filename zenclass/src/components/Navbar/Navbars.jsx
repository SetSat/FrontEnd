import React, { useState, useEffect, useContext,  } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import "./navbar.css";
import DataContext from "../../DataContext/DataContextProvider";
import Logout from "../logout/Logout";

import {
  FaListAlt,
  FaAward,
  FaFileContract,
  FaFileSignature,
  FaFileMedical,
  FaFileInvoice,
} from "react-icons/fa";
import {
  BsPieChartFill,
  BsFillDiagram3Fill,
  BsCardChecklist,
  BsFillFileEarmarkCodeFill,
  BsJournalCode,
  BsFileEarmarkPersonFill,
} from "react-icons/bs";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GiRank3 } from "react-icons/gi";

const navBarLink = [
  {
    id: 1,
    name: "Class",
    icon: <BsFillDiagram3Fill />,
    link: "/class",
    cName: "nav-text",
  },
  {
    id: 2,
    name: "Dashboard",
    icon: <BsPieChartFill />,
    link: "/dashboard",
    cName: "nav-text",
  },
  {
    id: 3,
    name: "Tasks",
    icon: <BsCardChecklist />,
    link: "/task",
    cName: "nav-text",
  },
  {
    id: 4,
    name: "Webcode",
    icon: <BsFillFileEarmarkCodeFill />,
    link: "/webcode",
    cName: "nav-text",
  },
  {
    id: 5,
    name: "Capstone",
    icon: <MdOutlineDeveloperMode />,
    link: "/capstone",
    cName: "nav-text",
  },
  {
    id: 6,
    name: "Queries",
    icon: <FaListAlt />,
    link: "/queries",
    cName: "nav-text",
  },
  {
    id: 7,
    name: "Requirements",
    icon: <FaFileContract />,
    link: "/requirements",
    cName: "nav-text",
  },
  {
    id: 8,
    name: "Portfolio-submission",
    icon: <BsFileEarmarkPersonFill />,
    link: "/portfolio",
    cName: "nav-text",
  },
  {
    id: 9,
    name: "Application",
    icon: <FaFileSignature />,
    link: "/application",
    cName: "nav-text",
  },
  {
    id: 10,
    name: "Interviewtasks",
    icon: <BsCardChecklist />,
    link: "/interviewtasks",
    cName: "nav-text",
  },
  {
    id: 11,
    name: "Leave-applications",
    icon: <FaFileMedical />,
    link: "/leave",
    cName: "nav-text",
  },
  {
    id: 12,
    name: "Mock-interview",
    icon: <FaFileInvoice />,
    link: "/mock",
    cName: "nav-text",
  },
  {
    id: 13,
    name: "Certificate",
    icon: <FaAward />,
    link: "/certificate",
    cName: "nav-text",
  },
  {
    id: 14,
    name: "Leaderboard",
    icon: <GiRank3 />,
    link: "/leaderboard",
    cName: "nav-text",
  },
  {
    id: 15,
    name: "Syllabus",
    icon: <BsJournalCode />,
    link: "/syllabus",
    cName: "nav-text",
  },
];

function Navbars() {
  const { finaltoken } = useContext(DataContext);
  const [sidebar, setSidebar] = useState(false);
  
  

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars" onClick={toggleSidebar}>
          <FaBars />
        </Link>
        <div className="zenclass">Zenclass</div>

        {finaltoken && finaltoken.user && finaltoken.user.name ? (
          <div className="displayname">
            <div className="name">{finaltoken.user.name}</div>
            <div>
              <Logout />
            </div>
          </div>
        ) : (
          <div className="navbar-right">
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </div>
        )}
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={toggleSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars" onClick={toggleSidebar}>
              <MdOutlineCancel />
            </Link>
          </li>
          {navBarLink.map((item, id) => (
            <li key={id} className={item.cName}>
              <Link to={item.link}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbars;
