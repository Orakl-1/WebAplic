const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    plant: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Plant' 
    },
    department: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Department' 
    },
    position: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Position' 
    },
    lastname: String,
    firstname: String,
    middlename: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    roles:[String]
});

if (!mongoose.models.User) {
  module.exports = mongoose.model('User', userSchema);
} else {
  module.exports = mongoose.models.User;
}