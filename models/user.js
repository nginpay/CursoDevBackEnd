const Sequelize = require('sequelize');
const database = require('../config/db');

const Users = database.define('users', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})
 
module.exports = Users;