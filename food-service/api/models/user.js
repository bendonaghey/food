var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  _id: Object,
  userId: String,
  email: String,
  username: String,
  forename: String,
  surname: String,
  dob: String,
  address: String,
  posts: [
    {
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
    }
  ]
});

var user = mongoose.model('User', userSchema);
module.exports = user;
