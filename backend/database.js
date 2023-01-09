import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MYSQL_PASSWORD);

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  })
  .promise();

export async function getServers() {
  const [rows] = await pool.query("SELECT * FROM servers");
  return rows;
}

export async function updateStatus(name, status) {
  const [rows] = await pool.query(
    `UPDATE servers SET statusServer = ? WHERE serverName = ? `,
    [status, name]
  );
  return rows;
}

export async function updateCol(name, col, number) {
  if (number != 0) {
    const [rows] = await pool.query(
      `UPDATE servers SET ${col} = ${col} + 1 WHERE serverName = ? `,
      [name]
    );
    return rows;
  } else {
    const [rows] = await pool.query(
      `UPDATE servers SET ${col} = 0 WHERE serverName = ? `,
      [name]
    );
    return rows;
  }
}

export async function updateUrlByName(name, url) {
  const [rows] = await pool.query(
    `UPDATE servers SET urlServer = ? WHERE serverName = ? `,
    [url, name]
  );
  return rows;
}

export async function getServerByName(name) {
  const [rows] = await pool.query(
    `SELECT * FROM servers WHERE serverName = ? `,
    [name]
  );
  return rows[0];
}

export async function createServer(name, url, status) {
  const [result] = await pool.query(
    `
  INSERT INTO servers (serverName , urlServer , statusServer)
  values (? , ? , ? )`,
    [name, url, status]
  );
  return getServerByName(name);
}

export async function deleteServerByName(name) {
  const [rows] = await pool.query(`DELETE FROM servers WHERE serverName = ? `, [
    name,
  ]);
  return rows[0];
}

export async function storeMonitor(name, statusResponse, time) {
  const [result] = await pool.query(
    `
  INSERT INTO monitorHistory (serverName , statusResponse , latincyTime)
  values (? , ?, ? )`,
    [name, statusResponse, time]
  );
  return result[0];
}

export async function getMonitorsHistory(name) {
  const [result] = await pool.query(
    `
    SELECT servers.serverName, urlServer , statusResponse, monitorTime, statusServer
    FROM servers
    LEFT JOIN monitorHistory ON monitorHistory.serverName = servers.serverName 
    WHERE servers.serverName = ? ORDER BY monitorTime DESC
    LIMIT 10`,
    [name]
  );
  return result;
}

export async function getAllHistory() {
  const [result] = await pool.query(
    `
    SELECT servers.serverName, urlServer , statusResponse, monitorTime, statusServer
    FROM servers
    LEFT JOIN monitorHistory ON monitorHistory.serverName = servers.serverName 
     ORDER BY monitorTime DESC`
  );
  return result;
}
