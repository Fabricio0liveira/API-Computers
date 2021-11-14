const mysql = require('mysql')

const connectionDb = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'computer-inventory'
})

module.exports = connectionDb