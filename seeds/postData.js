const { Post } = require('../models');

const postData = [
  {
    title: 'This is really cool I can write a post!',
    content: "Even though I don't know what to say!",
    user_id: 1,
  },
  {
    title: 'It is raining!',
    content: "On days like this, I'm always wet!",
    user_id: 2,
  },
  {
    title: 'My favorite soccer team',
    content: 'Arsenal is the best team ever!',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;