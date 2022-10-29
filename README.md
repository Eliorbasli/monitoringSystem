# monitoringSystem
system that will enable health monitoring of webservers in the cloud

## this system developed with nodejs and mysql database . 



there are 2 tables in mysql database:
## 1. servers (serverName ,urlServer , lasatStatus , healthly, unHealthly and last monitor)
![image](https://user-images.githubusercontent.com/45131527/198827313-6a79d978-6bbf-4a15-8c46-7a9a334e6633.png)


every 60 second system monitor all servers url status by api request and store the status in table called monitorHistory (id , serverName , statusResponse , monitorTime , latincyTime)

![image](https://user-images.githubusercontent.com/45131527/198827431-f4b613c7-7a2a-4363-90a3-1cdf376f53c1.png)


It is possible using API to:

- create new servers
- edit a server
- delete a server
- display all servers (in servers table) and their current heallt status
- display detailts about specific webserver request history logs

## Pre-requisites : 

 install Node.js

 clone the repository:

git clone <url>

install dependencies:

 - npm i express
 - npm i axios
 - npm i node-schedule
 - npm i perf_hooks
 - npm i env

create ".env" file  in "backend1" folder and add process.env.MYSQL_PASSWORD :

process.env.MYSQL_HOST = '127.0.0.1'
process.env.MYSQL_USER = 'root'
process.env.MYSQL_PASSWORD = ' '
process.env.MYSQL_DB = 'server_monitoring'

create 2 table in mysql: 

"""
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


"""

also in schema.sql file



finnaly run coomand in terminal : 

npm run dev

** There are thunder collection file, using this file you can create api requests. 

![image](https://user-images.githubusercontent.com/45131527/198846829-e7771944-d8a0-4be1-ab27-251cbc02210e.png)

















