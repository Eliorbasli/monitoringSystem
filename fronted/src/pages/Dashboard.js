import React from "react";
import "./Dashboard.css";

import ServerTable from "../components/ServerTable";
import LogSystem from "../components/LogSystem";
import ReviewBar from "../components/ReviewBar";

function Dashboard() {
  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <>
      <div className="container">
        <div className="left-box">
          <div className="server_list">
            <ServerTable />
          </div>
        </div>
        <div className="right-box">
          <div className="mini-box">
            <h1>perfomeance</h1>
            <div className="speedometer-screen">
              <div style={{ width: 150, height: 200 }}>
                <ReviewBar score={getRndInt(3, 90)} />
                <h2>Memory</h2>
              </div>
              <div style={{ width: 150, height: 200 }}>
                <ReviewBar score={getRndInt(20, 99)} />
                <h2></h2>
              </div>
              <div style={{ width: 150, height: 200 }}>
                <ReviewBar score={getRndInt(1, 80)} />
                <h2>CPU usage</h2>
              </div>
            </div>
          </div>

          <div className="mini-box">
            <div className="server_list2">Server failed</div>
            <div className="server_list1">
              <LogSystem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
