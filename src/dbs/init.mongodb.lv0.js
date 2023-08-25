'use strict'

const mongoose = require('mongoose');
const { db: { host, name, port } } = require('../configs/config.mongodb')
const connectString = `mongodb+srv://${host}:${port}/${name}`;

mongoose.connect(connectString).then(_ => console.log(`Connect success`))
    .catch(err => console.log('Error Connect!'))

//dev
if (1 === 0) {
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
};

module.exports = mongoose;