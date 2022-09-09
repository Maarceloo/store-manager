const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYQL_HOST,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'StoreManager',
  port: process.env.PORT,
});

module.exports = connection;