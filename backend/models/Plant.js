const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: String,
  shortName: String
});

const Plant = mongoose.model('Plant', plantSchema);
module.exports = Plant;