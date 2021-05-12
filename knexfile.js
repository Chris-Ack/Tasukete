require('dotenv').config();
const knex = require("knex");

const db = knex({
    client: "pg",
    connection: {
      connectionString:
        process.env.DATABASE_URL ||
        `postgres://${process.env.DB_USER}:${process.env.DB_PW}@127.0.0.1:5432/tasukete`,
        // ssl: { rejectUnauthorized: false },
      },
    searchPath: "public",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + "/migrations",
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
});

module.exports = db;

/*require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "127.0.0.1",
      user: process.env.REACT_APP_USER,
      password: process.env.REACT_APP_PW,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: "migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "127.0.0.1",
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
    },
    migrations: {
      tableName: "migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./data",
    },
  },
};
*/