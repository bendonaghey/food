var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: 'Description' },
  // Needs changed when maps implemented
  location: { type: String, default: 'Location' },
  pickUptime: { type: String, default: 'PickUpTime' },
  datePosted: { type: Date, default: Date.now() },
  likes: { type: Number, default: 0 },
  interests: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
  expirationDate: { type: String, default: 'expirationDate' },
  image: { type: String, default: 'image' }
});

var post = mongoose.model('Post', postSchema);
module.exports = post;
