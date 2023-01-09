const router = require("express").Router();

// import {
//   getServers,
//   getServerByName,
//   deleteServerByName,
//   createServer,
//   getMonitorsHistory,
//   getAllHistory,
//   updateUrlByName,
// } from "../database.js";
// import { monitoring } from "./monitor.js";

// // monitoring();

// //get all server without logs
// app.get("/servers", async (req, res) => {
//   try {
//     const result = await getServers();
//     console.log("hii hihihihi hihiii");
//     res.status(202).send(result);
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.get("/allLogs", async (req, res) => {
//   try {
//     const result = await getAllHistory();
//     res.status(202).send(result);
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.get("/server", async (req, res) => {
//   try {
//     const { name } = req.body;
//     const logs = await getMonitorsHistory(name);
//     res.send(logs);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //delete
// app.delete("/server", async (req, res) => {
//   const { name } = req.body;
//   const result = await deleteServerByName(name);
//   res.send(result);
// });

// //create server
// app.post("/server", async (req, res) => {
//   try {
//     const { name, url } = req.body;
//     const server = await createServer(name, url, "Failed");
//     res.status(201).send(server);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // update url by name
// app.put("/update", async (req, res) => {
//   try {
//     const { name, url } = req.body;
//     const server = await updateUrlByName(name, url);
//     res.status(201).send(server);
//   } catch (err) {
//     console.log(err.status);
//     res.status(500).json(err);
//   }
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke");
// });

module.exports = router;
