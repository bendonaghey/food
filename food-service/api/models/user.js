var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: String,
  username: {type: String, default: 'Username'},
  forename: {type: String, default: 'Forename'},
  surname: {type: String, default: 'Surname'},
  dob: {type: Date, default: Date.now()},
  address: {
    street: {type: String, default: 'Street'},
    number: {type: String, default: 'Number'},
    postcode: {type: String, default: 'Postcode'},
    additional: {type: String, default: 'Additional'}
  },
  posts: [
    {
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
