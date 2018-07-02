var post = require('../models/post');

module.exports = {
  getAllPosts: function(callback) {
    post.find({}, function(error, posts) {
      if (error) {
        console.log(error);
        return;
      }
      callback(posts);
    });
  },

  getPostById: function(postId, callback) {
    post.findOne({ postId }, function(error, post) {
      if (error) {
        console.log(error);
        return;
      }
      callback(post);
    });
  },

  addPost: function(postId, callback) {
    post.findOne({ postId }, function(error, newPost) {
      if (error) {
        console.log(error);
        return status(500).send();
      }
      callback(newPost);
    });
  }
};
