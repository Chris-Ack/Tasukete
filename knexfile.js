require('dotenv')
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

