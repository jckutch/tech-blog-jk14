const { User } = require('../models');

const userData = [
  {
    username: 'mikek',
    email: 'mikek@aol.com',
    password: 'superstart',
  },
  {
    username: 'funnygirl',
    email: 'fg@comedyhouse.com',
    password: 'keepmelaughing',
  },
  {
    username: 'crimejunkie',
    email: 'stevie@gmail.com',
    password: 'neverbeenarrested',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;