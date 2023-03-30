const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  name: String,
  location: String,
  likes: Number,
  description: String,
  postImage: String,
  date: Date,
});

module.exports = mongoose.model('Post', PostSchema);
