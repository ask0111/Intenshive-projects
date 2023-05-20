const mongoose = require('mongoose');
const schema = require('./schema');

const Collection = new mongoose.model('dtcollection', schema);

module.exports = Collection;