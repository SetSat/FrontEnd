import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import "./dashboard.css";


function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="left">
          <div className="left-top">
            <div className="codekata">
              <h3>Codekata</h3>
            </div>
            <div className="points">
              <h5>Total:0</h5>
              <h5>Total Points:1050</h5>
            </div>
          </div>

          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
              },
            ]}
            width={600}
            height={350}
          />
        </div>
        <div className="right">
          <div className="right-top">
            <div className="webkata">
              <h3>Webkata</h3>
            </div>
            <div className="points">
              <h5>Total:0</h5>
              <h5>Total Points:1050</h5>
            </div>
          </div>

          <BarChart
            series={[
              { data: [3, 4, 1, 6, 5], stack: "A", label: "Series A1" },
              { data: [4, 3, 1, 5, 8], stack: "A", label: "Series A2" },
              { data: [4, 2, 5, 4, 1], stack: "B", label: "Series B1" },
              { data: [2, 8, 1, 3, 1], stack: "B", label: "Series B2" },
              { data: [10, 6, 5, 8, 9], label: "Series C1" },
            ]}
            width={600}
            height={350}
            
          />
        </div>
      </div>
      <div>
        <div>
          <div className="tasktop">
            <div className="task">
              <h3>Task</h3>
            </div>
            <div className="pending">
              <h3>Submitted task:8</h3>
              <h3>Pending task:2</h3>
            </div>
          </div>
        </div>
        <div className="task">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
            series={[
              {
                data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                showMark: ({ index }) => index % 2 === 0,
              },
            ]}
            width={900}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
