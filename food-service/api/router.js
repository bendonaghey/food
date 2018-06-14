var express = require('express');
var router = express.Router();

var system = require('./system/system.controller');
var posts = require('./post/post.controller');

router.get('/about', system.getSystemInfo);
router.get('/posts', posts.getAllPosts);

module.exports = router;