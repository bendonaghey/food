var postService = require('./post.service');

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
  }
};
