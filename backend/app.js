import express from "express";

import cors from "cors";

const app = express();

// import server from "./routes/server";

app.use(express.json());
app.use(cors());

// app.use("/api/", "./routes/server");

import {
  getServers,
  getServerByName,
  deleteServerByName,
  createServer,
  getMonitorsHistory,
  getAllHistory,
  updateUrlByName,
} from "./database.js";
import { monitoring } from "./monitor.js";

monitoring();

//get all server without logs
app.get("/api/servers", async (req, res) => {
  try {
    const result = await getServers();

    res.status(202).send(result);
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/allLogs", async (req, res) => {
  try {
    const result = await getAllHistory();
    res.status(202).send(result);
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/server", async (req, res) => {
  try {
    const { name } = req.body;
    const logs = await getMonitorsHistory(name);
    res.send(logs);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete
app.post("/api/deleteServer", async (req, res) => {
  console.log(" from server -> /api/server method: delete");
  try {
    const { name } = req.body;
    console.log(req.body);
    const result = await deleteServerByName(name);
    console.log("2. " + result);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//create server
app.post("/api/server", async (req, res) => {
  try {
    console.log("2223");
    const { name, url } = req.body;
    const server = await createServer(name, url, "Failed");
    res.status(201).send(server);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update url by name
app.put("/api/update", async (req, res) => {
  try {
    const { name, url } = req.body;
    const server = await updateUrlByName(name, url);
    res.status(201).send(server);
  } catch (err) {
    console.log(err.status);
    res.status(500).json(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke");
});

app.listen(5000, () => {
  console.log("Server is running on port  5000");
});
