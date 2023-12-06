const { Client } = require("pg");

const client = new Client({
  host: process.env.EXPO_PUBLIC_DB_HOST,
  port: process.env.EXPO_PUBLIC_DB_PORT,
  database: process.env.EXPO_PUBLIC_DB_DATABASE,
  user: process.env.EXPO_PUBLIC_DB_USER,
  password: process.env.EXPO_PUBLIC_DB_PASSWORD,
});

module.exports = client;
