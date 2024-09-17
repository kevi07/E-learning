const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true,    
  },
  domain: {
    type: String,
    required: true,
  },
  videos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video'    
    }]
});

module.exports = mongoose.model('Course', CourseSchema);
