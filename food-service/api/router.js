var express = require('express');
var router = express.Router();

var system = require('./system/system.controller');
var posts = require('./post/post.controller');
var users = require('./user/user.controller');

// !This is for when multer is implemented
// !var path = require('path');
// var multer = require('multer');
// var storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req, file, cb) {
//     cb(
//       null,
//       file.fieldname + '-' + Date.now() + path.extname(file.originalname)
//     );
//   }
// });

// !const upload = multer({
//   storage: storage
// }).single('image');

//System operations
router.get('/about', system.getSystemInfo);

//User operations
router.get('/users', users.getAllUsers);
router.post('/login', users.getUserByEmail);
router.post('/signup', users.createUser);
router.post('/profile', users.updateProfile);

//Post operations
router.get('/posts', posts.getAllPosts);
router.get('/posts/:id', posts.getPostById);
router.post('/add-post', posts.createPost);

module.exports = router;
