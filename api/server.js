const express = require('express');
const projectsRouter =  require('../routers/projectsRouter')

const server = express();
server.use(express.json());

server.use(projectsRouter)

module.exports = server;