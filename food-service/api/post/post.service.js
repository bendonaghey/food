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
  }
};
