const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  tokenAccess: {
    type: String,
  },
  addedDate: {
    type: Date,
    default: Date.now(), // To clean expired tokens
  },
});

module.exports = mongoose.model('Token', tokenSchema);