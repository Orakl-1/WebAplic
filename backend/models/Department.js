const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: String,
  shortName: String,
  isAuditor: Boolean,
  plant: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' }
});

const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;