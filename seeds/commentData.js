const { Comment } = require('../models');

const commentData = [
  {
    content: 'All new information',
    user_id: 1,
    post_id: 2,
  },
  {
    content: 'When do we need to go?',
    user_id: 2,
    post_id: 3,
  },
  {
    content: 'Love all the fun around here!',
    user_id: 3,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;