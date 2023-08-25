'use strict'

const mongoose = require('mongoose');

const connectString = `mongodb+srv://khanhduong2t2:n7F0fFMoFbEhKOSK@cluster0.t7i27ua.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectString).then(_ => console.log(`Connect success`))
    .catch(err => console.log('Error Connect!'))

//dev
if (1 === 0) {
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
};

module.exports = mongoose;