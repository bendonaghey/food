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

  addUser: function(req, res) {
    userService.addUser(req.body.email, function(newUser) {
      var addUser = new user();

      if (!newUser) {
        console.log('User not found');
        return res.status(404).send();
      }

      addUser.username = req.body.username;
      addUser.email = req.body.email;

      user.db.collection('users').save(addUser, (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(newUser);
      });
    });
  }
};
