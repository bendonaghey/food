var userService = require('./user.service');
var user = require('../models/user');

module.exports = {
  getAllUsers: function(req, res) {
    userService.getAllUsers(function(users) {
      res.send(users);
    });
  },

  getUserByEmail: function(req, res) {
    userService.getUserByEmail(req.body.email, function(user) {
      if (!user) {
        console.log('User not found');
        return res.status(404).send();
      }
      res.send(user);
    });
  },

  createUser: function(req, res) {
    userService.createUser(req.body.email, req.body.username, function(
      newUser
    ) {
      res.send(newUser);
    });
  },

  updateProfile: function(req, res) {
    userService.updateProfile(
      req.body.email,
      req.body.forename,
      req.body.bio,
      function(updateUser) {
        console.log(req.body.email);
        console.log(req.body.forename);
        console.log(req.body.bio);
        res.send(updateUser);
      }
    );
  }
};
