CREATE DATABASE server_monitoring;
USE server_monitoring;

CREATE TABLE servers (
    serverName VARCHAR(255) PRIMARY KEY NOT NULL,
    urlServer TEXT NOT NULL,
    statusServer VARCHAR(255) NOT NULL,
    healthly integer DEFAULT 0,
    unHealthly integer DEFAULT 0,
    lastMonitor TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE monitorHistory (
    id integer PRIMARY KEY AUTO_INCREMENT,
    serverName VARCHAR(255) NOT NULL,
    statusResponse integer NOT NULL,
    monitorTime TIMESTAMP NOT NULL DEFAULT NOW()
);


INSERT INTO servers (serverName , urlServer , statusServer)
VALUES
('GitHub' , 'https://github.com/Eliorbasli' , 'Success'),
('Youtube' , 'http://www.youtube.com/eggs/' , 'Failed');