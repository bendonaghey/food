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
    console.log('here', email);
    user.findOne({ email }, function(error, user) {
      if (error) {
        console.log(error);
        return status(500).send();
      }
      callback(user);
    });
  },

  addUser: function(email, callback) {
    user.findOne({ email }, function(error, newUser) {
      if (error) {
        console.log(error);
        return status(500).send();
      }
      callback(newUser);
    });
  }
};
