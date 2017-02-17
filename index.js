var config = require('./config')
    cluster = require('cluster'),
    port = config.port

const numCPUs = require('os').cpus().length

if (process.getuid && process.getuid() === 1000) {
    console.log("Please run as root.")
    return
}

if (cluster.isMaster) {
    console.log("Manager started.")
    console.log(`Manager PID is ${process.pid}.`)
}

    var serverstart = require('./serverstart')
    serverstart

if (cluster.isMaster) {
    console.log("labHTTP running on port " + port + " with " + numCPUs + " threads.")
}