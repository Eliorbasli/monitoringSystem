import schedule from "node-schedule";
import axios from "axios";
import { response } from "express";
import { performance } from "perf_hooks";

import {
  getServers,
  updateCol,
  updateStatus,
  storeMonitor,
} from "./database.js";

export function monitoring() {
  const job = schedule.scheduleJob(" */59 * * * * *", async function () {
    const list = await getServers();
    var i = 0;

    for (i of list) {
      const url = i.urlServer;
      let startTime = performance.now();
      const res = await axios
        .get(url)
        .then(async function (response) {
          let latency = (performance.now() - startTime) / 1000;

          storeMonitor(i.serverName, response.status, latency);
          if (response.status >= 200 && response.status < 300 && latency < 60) {
            if (i.healthly >= 4) {
              await updateStatus(i.serverName, "Succses");
            }
            await updateCol(i.serverName, "healthly");
            await updateCol(i.serverName, "unHealthly", 0);
          } else {
            storeMonitor(i.serverName, response.status, latency);
          }
          console.log("status " + response.status + " from " + url);
        })
        .catch(async function (error) {
          console.log("error with " + i.serverName);
          if (i.unHealthly >= 2) {
            await updateStatus(i.serverName, "Failed");
          }
          await updateCol(i.serverName, "unHealthly");
          await updateCol(i.serverName, "healthly", 0);
        });
    }
  });
}
