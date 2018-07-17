var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, default: 'Username' },
  forename: { type: String, default: 'Forename' },
  surname: { type: String, default: 'Surname' },
  dob: { type: Date, default: Date.now() },
  address: {
    street: { type: String, default: 'Street' },
    number: { type: String, default: 'Number' },
    postcode: { type: String, default: 'Postcode' },
    additional: { type: String, default: 'Additional' }
  },
  posts: [
    {
      title: String,
      description: String,
      // !Needs changed
      location: String,
      pickUpTime: String,
      datePosted: Date,
      likes: Number,
      interests: Number,
      active: Boolean,
      expirationDate: String,
      image: String
    }
  ]
});

var user = mongoose.model('User', userSchema);
module.exports = user;
