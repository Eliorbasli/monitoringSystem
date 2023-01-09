import { React, useEffect, useState } from "react";
import Server from "../components/Server";
import axios from "axios";
import "./ServerTable.css";
import NewServer from "./NewServer";

function ServerTable() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [ServersList, setServers] = useState([]);
  const getServers = async () => {
    try {
      const res = await axios.get("/servers", {});

      setServers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getServers();
  }, []);

  return (
    <>
      <h1>website to monitor:</h1>
      <div className="table">
        {ServersList.map((p) => (
          <Server data1={p} />
        ))}
      </div>
      <div className="addServer" onClick={toggleModal}>
        add new Server
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <NewServer />

            <div className="close-modal" onClick={toggleModal}>
              <button>CLOSE</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ServerTable;
