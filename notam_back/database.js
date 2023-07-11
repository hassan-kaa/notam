const { Pool } = require('pg');

const pool = new Pool({
    user: "houba",
    password: "iheb12345",
    host: "localhost",
    port: 5432,
    database: "notams",
  });
  
module.exports = pool;
  

