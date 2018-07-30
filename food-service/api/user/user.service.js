var user = require('../models/user');

module.exports = {
  getAllUsers: function(callback) {
    user.find({}, function(error, users) {
      if (error) {
        console.log(error);
        return;
      }
      callback(users);
    });
  },

  getUserByEmail: function(email, callback) {
    user.findOne({ email }, function(error, user) {
      if (error) {
        console.log(error);
        return status(500).send();
      }
      callback(user);
    });
  },

  createUser: function(email, username, callback) {
    var newUser = new user({ email: email, username: username });
    user.create(newUser, function(error, res) {
      callback(res);
    });
  },

  updateProfile: function(email, forename, bio, callback) {
    user.findOneAndUpdate(
      { email: email },
      { forename: forename, bio: bio },
      function(error, res) {
        console.log(email);
        console.log(forename);
        console.log(res);
        callback(res);
      }
    );
  }
};
