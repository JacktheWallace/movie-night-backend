const dotenv = require('dotenv');
const mysql = require('mysql2/promise');
const { DB_PASSWORD, DB_NAME, DB_USER, DB_HOST, DB_PORT } = process.env;

module.exports = async () => {

    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT,
      database: DB_NAME,
    });

    return connection;
};

//allows the creation of a connection to the database for requests through controlers.