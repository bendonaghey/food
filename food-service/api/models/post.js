var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  _id: Object,
  postId: String,
  userId: String,
  title: String,
  description: String,
  location: Object,
  datePosted: Number,
  likes: Number,
  interst: Number,
  active: Boolean,
  expirationDate: Number,
  image: String
});

var post = mongoose.model('Post', postSchema);
module.exports = post;
