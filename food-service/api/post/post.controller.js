var postService = require('./post.service');
var post = require('../models/post');

module.exports = {
  getAllPosts: function(req, res) {
    postService.getAllPosts(function(posts) {
      res.send(posts);
    });
  },

  getPostById: function(req, res) {
    postService.getPostById(req.params.id, function(posts) {
      res.send(posts);
    });
  },

  createPost: function(req, res) {
    postService.createPost(
      req.body.email,
      req.body.post,
      req.body.url,
      function(newPost) {
        res.send(newPost);
      }
    );
  }
};
