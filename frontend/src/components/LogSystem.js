import { React, useEffect, useState } from "react";
import axios from "axios";
import "./LogSystem.css";

function LogSystem() {
  const [LogsList, setLogs] = useState([]);
  const getLogs = async () => {
    try {
      const res = await axios.get("/allLogs", {});

      setLogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLogs();
  }, []);

  return (
    <>
      <h1 className="titleBox">Logs</h1>
      <div className="container2">
        <div className="table">
          {LogsList.map((p) => (
            <div className="log">
              <h3>{p.monitorTime}</h3>
              <h3>{p.serverName}</h3>
              <h3>{p.urlServer}</h3>
              <h3>{p.statusServer}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LogSystem;
