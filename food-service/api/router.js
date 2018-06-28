var express = require('express');
var router = express.Router();

var system = require('./system/system.controller');
var posts = require('./post/post.controller');
var users = require('./user/user.controller');

router.get('/about', system.getSystemInfo);
router.get('/posts', posts.getAllPosts);
router.get('/posts/:id', posts.getPostById);
router.get('/users', users.getAllUsers);
router.post('/login', users.getUserByEmail);
router.post('/signup', users.addUser);

module.exports = router;
