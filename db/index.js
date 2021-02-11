const { request } = require("express");

const { Pool } = require("pg");
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  databse: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
};
console.log(devConfigd.port);

const proConfig = {
  connectionString: process.env.DATABASE_URL, //heroku addons
};

const pool = new Pool({
  // process.env.NODE_ENV === "production" ? proConfig : devConfig
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };

module.exports = pool;
