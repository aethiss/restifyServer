var restify = require('restify')

// API
const API_Registration = require('./REST/registration')

// Restify Server && plugins
var server = restify.createServer()
server.use(restify.plugins.queryParser({ mapParams: true }))
server.use(restify.plugins.bodyParser({ mapParams: true }))
server.use(restify.plugins.acceptParser(server.acceptable))

// REST ROUTING
API_Registration(server)

server.listen(7000, function() {
  console.log('%s listening at %s', server.name, server.url)
})
