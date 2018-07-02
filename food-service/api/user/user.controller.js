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
    const addUser = new user({
      username: req.body.username,
      email: req.body.email
    });

    user.db.collection('users').save(addUser, (err, result) => {
      if (err) {
        console.log('Save user error: ' + err);
      } else {
        console.log('User added');
      }
    });

    userService.addUser(req.body.email, function(newUser) {
      if (!newUser) {
        console.log('User not found');
        return res.status(404).send();
      }
      console.log(newUser);
      res.send(newUser);
    });
  }
};
