var post = require('../models/post');
var user = require('../models/user');

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

  createPost: function(email, postInfo, url, callback) {
    var newPost = new post({
      title: postInfo.title,
      description: postInfo.description,
      location: postInfo.location,
      pickUpTime: postInfo.pickUpTime,
      expirationDate: postInfo.expirationDate,
      image: url
    });
    post.create(newPost, function(error, res) {
      user.findOneAndUpdate(
        { email: email },
        {
          $push: {
            posts: {
              title: newPost.title,
              description: newPost.description,
              location: newPost.location,
              pickUpTime: newPost.pickUpTime,
              expirationDate: newPost.expirationDate,
              image: newPost.image
            }
          }
        },
        function(error, res) {
          callback(res);
        }
      );
    });
  }
};
