import axios from "axios";
import React from "react";
import "./Server.css";

function Server(props) {
  async function handleDelete(e) {
    e.preventDefault();

    console.log("delete btn clicked");
    const server_name = props.data1.serverName;

    if (window.confirm("Are you sure that you want to delete this server? ")) {
      try {
        await axios
          .post("/deleteServer", { name: server_name })
          .then(console.log("clicked delete server"));

        window.location.href = "http://localhost:3000/dashboard";
      } catch (err) {
        console.log(err);
      }
    }
    console.log(server_name);
  }
  return (
    <>
      <div className="row">
        <div className="box">
          <div className="name">name: {props.data1.serverName}</div>
          <div className="url">url: {props.data1.urlServer}</div>
          <div className="status">status: {props.data1.statusServer}</div>
        </div>
        <div className="box">
          <button className="btn edit" role="button">
            Edit
          </button>
          <form action="/deleteServer1" method="post" onSubmit={handleDelete}>
            <input type="hidden" name="name" value="data1.serverName"></input>
            <button className="btn delete" type="submit">
              Delete
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Server;
