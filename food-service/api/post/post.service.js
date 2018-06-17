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
    post.find({ postId }, function(error, posts) {
      if (error) {
        console.log(error);
        return;
      }
      callback(posts);
    });
  }
};
