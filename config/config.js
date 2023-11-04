require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'infothings_todo',
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 8889,
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'infothings_todo',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
