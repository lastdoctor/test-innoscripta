const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  priceUsd: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Pizza', pizzaSchema);