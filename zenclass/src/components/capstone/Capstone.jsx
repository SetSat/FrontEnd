import React, { useState } from "react";
import "./capstone.css";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import axios from "axios";
const Capstone = () => {
  const [formData, setFormData] = useState({
    frontEndSourceCode: "",
    backEndSourceCode: "",
    frontEndDeployedURL: "",
    backEndDeployedURL: "",
    comments: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://capstone-x52g.onrender.com/capstone/submit",
        formData
      );
      console.log("Form data submitted successfully:", response.data);

      setFormData({
        frontEndSourceCode: "",
        backEndSourceCode: "",
        frontEndDeployedURL: "",
        backEndDeployedURL: "",
        comments: "",
      });
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };
  const data = {
    Task_Title: "Zen class student dashboard",
    Specifications_on_the_Design: {
      Frontend: "React.js",
      Backend: "Node.js",
      Database: "MongoDB",
    },
    Requirements: {
      "1. CODE_QUALITY":
        "The project should achieve high code quality standards.",
      "2. Fonts/Icons": "Use fonts/icons as required in the design.",
      "3. Various_Charts": "Utilize various charts in the design.",
      "4. Bootstrap/Material_CSS":
        "Utilize Bootstrap or Material CSS in the design.",
    },
    Submission_Guidelines: {
      Push_Work_to_GitHub: {
        Frontend_Repository: "project-name-frontend",
        Backend_Repository: "project-name-backend",
      },
      Deployment: {
        Frontend_Application: "Deploy on Netlify (https://www.netlify.com)",
        Backend_Application: "Deploy on Render (https://render.com/)",
      },
    },
    "Basic_Hints/Reference_Sites": [
      "Bootstrap: https://getbootstrap.com/docs/4.4/getting-started/introduction/",
      "Chart.js: https://www.chartjs.org/",
      "JWT: https://jwt.io/introduction/",
      "React Bootstrap: https://react-bootstrap.github.io/",
      "Materialize CSS: https://materializecss.com/",
      "Tailwind CSS: https://tailwindcss.com/",
      "Express.js: https://expressjs.com/",
    ],
    Terms_and_Conditions: {
      Confidentiality: "Do not share this document with anyone.",
      Open_Source:
        "Open-source your code without mentioning the company's name.",
      No_Commercial_Use:
        "Your source code won't be used for commercial purposes.",
      Violation: "Violation of terms and conditions is strictly prohibited.",
    },
    Use_Case:
      "Identify and implement a useful dashboard for Zen class students.",
  };
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card" onClick={toggleDetails}>
        <div>
          <h2 className="task-title">{data.Task_Title}</h2>
        </div>
        <div>
          {!showDetails && (
            <p className="show-details">
              <MdOutlineExpandMore className="icon" />
              Show More
            </p>
          )}
          {showDetails && (
            <p className="show-details">
              <MdOutlineExpandLess className="icon" />
              Show Less
            </p>
          )}
        </div>
      </div>
      <div>
        {showDetails && (
          <div className="details">
            <h3>Specifications on the Design:</h3>
            <ul>
              <li>Frontend: {data.Specifications_on_the_Design.Frontend}</li>
              <li>Backend: {data.Specifications_on_the_Design.Backend}</li>
              <li>Database: {data.Specifications_on_the_Design.Database}</li>
            </ul>
            <h3>Requirements:</h3>
            <ol>
              {Object.entries(data.Requirements).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ol>
            <h3>Submission Guidelines:</h3>
            <ul>
              <li>
                Frontend Repository:{" "}
                {
                  data.Submission_Guidelines.Push_Work_to_GitHub
                    .Frontend_Repository
                }
              </li>
              <li>
                Backend Repository:{" "}
                {
                  data.Submission_Guidelines.Push_Work_to_GitHub
                    .Backend_Repository
                }
              </li>
              <li>
                Frontend Application:{" "}
                {data.Submission_Guidelines.Deployment.Frontend_Application}
              </li>
              <li>
                Backend Application:{" "}
                {data.Submission_Guidelines.Deployment.Backend_Application}
              </li>
            </ul>
            <h3>Basic Hints/Reference Sites:</h3>
            <ul>
              {data["Basic_Hints/Reference_Sites"].map((item, index) => (
                <li key={index}>
                  <a target="_blank" href={item.split(": ")[1]}>
                    {item.split(": ")[0]}
                  </a>
                </li>
              ))}
            </ul>
            <h3>Terms and Conditions:</h3>
            <ul>
              {Object.entries(data.Terms_and_Conditions).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
            <h3>Use Case:</h3>
            <p>{data.Use_Case}</p>
            <div className="container">
              <form onSubmit={handleSubmit}>
                <h2 className="form-title">Code Submission</h2>
                <div className="form-group">
                  <label htmlFor="frontEndSourceCode">
                    Front-end Source code
                  </label>
                  <input
                    type="text"
                    id="frontEndSourceCode"
                    name="frontEndSourceCode"
                    onChange={handleChange}
                    value={formData.frontEndSourceCode}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="backEndSourceCode">
                    Back-end Source code
                  </label>
                  <input
                    type="text"
                    id="backEndSourceCode"
                    name="backEndSourceCode"
                    onChange={handleChange}
                    value={formData.backEndSourceCode}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="frontEndDeployedURL">
                    Front-end Deployed URL
                  </label>
                  <input
                    type="text"
                    id="frontEndDeployedURL"
                    name="frontEndDeployedURL"
                    onChange={handleChange}
                    value={formData.frontEndDeployedURL}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="backEndDeployedURL">
                    Back-end Deployed URL
                  </label>
                  <input
                    type="text"
                    id="backEndDeployedURL"
                    name="backEndDeployedURL"
                    onChange={handleChange}
                    value={formData.backEndDeployedURL}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="comments">Comments</label>
                  <textarea
                    id="comments"
                    name="comments"
                    onChange={handleChange}
                    value={formData.comments}
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Capstone;
