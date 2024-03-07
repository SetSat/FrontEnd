import React, { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import "./syllabus.css";
import Alert from "@mui/material/Alert";

function Syllabus() {
  const [showAlert, setShowAlert] = useState(false);

  const handleDownload = async () => {
    const pdfPath = "../../assets/mernSyllabus.pdf";

    try {
      const response = await fetch(pdfPath);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "mernSyllabus.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div className="syllabus-container">
      <div className="syllabus-top">
        <div className="course">Course</div>
        <div className="syllabus-title">Syllabus</div>
      </div>
      <div className="syllabus-bottom">
        <div className="course-name">FSD-MERN</div>
        <div className="download-button" onClick={handleDownload}>
          <FaDownload />
        </div>
      </div>
      {showAlert && (
        <Alert
          variant="filled"
          severity="success"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 9999,
          }}
          onClose={() => setShowAlert(false)}
        >
          Download Successfull
        </Alert>
      )}
    </div>
  );
}

export default Syllabus;
