const express = require('express');
const helmet = require('helmet')
const cors = require('cors')
const routerActions = require('./RouteAction/RouteAction')
const routerProjects = require('./RouteProject/RouteProject')

const server = express();

// global middleware
server.use(express.json())
server.use(cors())
server.use(helmet())
server.use(logger)
server.use('/api/actions', routerActions)
server.use('/api/projects', routerProjects)

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to my API</h2>`)
});

//custom middleware
function logger(req, res, next) {
    console.log(`[ ${new Date()} ] ${req.method} ${req.url}`)
    next()
};

module.exports = server;
