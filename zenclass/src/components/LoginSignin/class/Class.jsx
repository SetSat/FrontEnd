import React, { useContext, useEffect, useState } from "react";
import "./class.css";
import { roadMapData, roadmap } from "./classdata";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
 




function Class() {
  const [Day, setDay] = useState(0);
  const [data, setData] = useState(null);
  
  

  useEffect(() => {
    const findDay = roadMapData.find((item) => item.day === Day);
    setData(findDay || null);
  }, [Day, roadMapData]);

  const handledayClick = (day) => {
    setDay(day);
  };
  

  return (
    <div className="class">
      <div className="left">
        <h1 className="joinclass">Join the class</h1>
        {data ? (
          <div>
            <div className="title">
              {data.title || "No session title available"}
            </div>
            <div className="datetime">{data.time || "No time available"}</div>
            <div>Content:</div>
            <div>{data.content || "No content available"}</div>
            <div className="prereadhead">Preread:</div>
            <div className="preread">
              {data.preread || "No preread available"}
            </div>
            {data.activity && (
              <div className="activities">
                <div>{data.activity}</div>
              </div>
            )}
            {data.link && (
              <div>
                <a
                  className="joinclasslink"
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the Class!!
                </a>
              </div>
            )}
            <div>
              {data.activity && (
                <div className="taskdiv">
                  {
                       <Accordion >
                       <AccordionSummary
                         
                         aria-controls="panel1-content"
                         id="panel1-header"
                       >
                         <Typography>Tasks</Typography>
                       </AccordionSummary>
                       <AccordionDetails>
                        <div>{data.activity}</div>
                       </AccordionDetails>
                     </Accordion>
                  }
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>No data available</div>
        )}
      </div>

      <div>
        <div className="sessionroad">Session Road map</div>
        <div className="sessionsContainer">
          {roadmap.map((item) => (
            <div
              className="roadmap_icon_container"
              onClick={() => handledayClick(item.no)}
              key={item.no}
            >
              {item.no}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Class;
