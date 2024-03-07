import React, { useState } from "react";
import axios from "axios";
import "./portfolio.css";
const Portfolio = () => {
  const [githubUrl, setGithubUrl] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://capstone-x52g.onrender.com/port/submit", {
        githubUrl,
        portfolioUrl,
        resumeUrl,
      });
      alert("Submission successful");
      setGithubUrl("");
      setPortfolioUrl("");
      setResumeUrl("");
    } catch (error) {
      alert("Failed to submit");
    }
  };

  return (
    <div className="form-container">
      <h2>Submission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="githubUrl">GitHub URL:</label>
          <input
            type="text"
            id="githubUrl"
            placeholder="Enter your GitHub URL"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="portfolioUrl">Portfolio URL:</label>
          <input
            type="text"
            id="portfolioUrl"
            placeholder="Enter your Portfolio URL"
            value={portfolioUrl}
            onChange={(e) => setPortfolioUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumeUrl">Resume URL:</label>
          <input
            type="text"
            id="resumeUrl"
            placeholder="Enter your Resume URL"
            value={resumeUrl}
            onChange={(e) => setResumeUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="note">
        Note: You Won't be Able to Submit When the Portfolio is under Review or
        Reviewed.
      </p>
    </div>
  );
};

export default Portfolio;
