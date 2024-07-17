const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
  plant: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  name: String,
  shortName: String
});

const Position = mongoose.model('Position', positionSchema);
module.exports = Position;