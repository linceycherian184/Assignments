const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'project',
    password: 'admin123'
});

module.exports = pool.promise();