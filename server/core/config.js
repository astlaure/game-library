require('dotenv').config();

const {
  SERVER_PORT, SECRET_KEY,
  DATABASE_HOST, DATABASE_NAME,
  DATABASE_USERNAME, DATABASE_PASSWORD,
} = process.env;

const config = {
  port: SERVER_PORT,
  secretKey: SECRET_KEY,
  database: {
    host: DATABASE_HOST,
    name: DATABASE_NAME,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
  },
};

module.exports = config;
