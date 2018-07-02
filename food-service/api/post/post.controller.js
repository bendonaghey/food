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

  addPost: function(req, res) {
    var nextId;
    postService.getAllPosts(function(posts) {
      nextId = 1000 + posts.length;
      // !1000 needs to be dynamic
    });

    const addPost = new post({
      postId: nextId,
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      pickUpTime: req.body.pickUpTime,
      datePosted: req.body.datePosted,
      likes: req.body.likes,
      interest: req.body.interest,
      active: req.body.active,
      expirationDate: req.body.expirationDate,
      image: req.body.image
      // !Needs change to go to its own collection
      // This is for when multer is implemented
      // image: req.file.path
    });

    post.db.collection('posts').save(addPost, (err, result) => {
      if (err) {
        console.log('Save post error: ' + err);
      } else {
        console.log('Post added');
      }
    });

    postService.addPost(nextId, function(newPost) {
      if (!newPost) {
        console.log('Post not found');
        return res.status(404).send();
      }
      res.status(201).send(newPost);
    });
  }
};
