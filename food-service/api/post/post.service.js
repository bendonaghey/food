module.exports = {
  getAllPosts: function (callback) {
    callback(posts());
  }
}


function posts() {
  return [
    {
      userId: '1000',
      title: 'unneeded food',
      description: 'giving away some unneeded food',
      location: {},
      datePosted: 1528967492,
      likes: 0,
      interst: 0,
      active: true,
      expirationDate: 1528967539,
      image: 'http://via.placeholder.com/300'
    }
  ]
}