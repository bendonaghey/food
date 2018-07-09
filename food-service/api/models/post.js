var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  postId: { type: String, required: true },
  userId: String,
  title: String,
  description: String,
  // Needs changed when maps implemented
  location: String,
  pickUptime: String,
  datePosted: Number,
  likes: Number,
  interest: Number,
  active: Boolean,
  expirationDate: String,
  image: String
});

var post = mongoose.model('Post', postSchema);
module.exports = post;
