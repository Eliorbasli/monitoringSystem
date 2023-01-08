import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./NewServer.css";

function NewServer() {
  const { id } = useParams();
  const [NameServer, setNameServer] = useState();
  const [UrlServer, setUrlServer] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    const newServer = { name: NameServer, url: UrlServer };
    try {
      if (!id) {
        console.log("in create new monitor");
        await axios
          .post("/server", newServer)
          .then(console.log("created new server monitor"));
      } else {
        console.log("update server monitor");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h2>Add a new server</h2>
      <form onSubmit={handleSubmit}>
        <label>Name server:</label>
        <input
          name="NameServer"
          type="text"
          required
          onChange={(e) => setNameServer(e.target.value)}
        />
        <label>Url server:</label>
        <input
          name="UrlServer"
          type="text"
          required
          onChange={(e) => setUrlServer(e.target.value)}
        />

        <input
          className="submitBtn"
          type="submit"
          //   value={id ? "Update" : "Submit"}
          //   value={(id = "Submit")}
        ></input>
      </form>
    </div>
  );
}

export default NewServer;
