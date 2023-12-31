'use strict'

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;

// Check connect
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log('Number of connections:', numConnection)
};

// Checkout Overload
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        // Example maximum number of connection based on number of cors
        const maxConnection = numCores * 5;

        console.log('Max of Connection: ', maxConnection)
        console.log('Active connections:', numConnection)
        console.log('Num Cores:', numCores)
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`)

        if (numConnection > maxConnection) {
            console.log('Connection overload detected')
        };
    }, _SECONDS);
};

module.exports = {
    countConnect,
    checkOverload
};