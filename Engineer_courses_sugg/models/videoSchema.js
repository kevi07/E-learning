const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Video', VideoSchema);

