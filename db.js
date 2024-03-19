const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "argus2023",
  database: "project-learn",
  port: 5432,
});


module.exports = pool;