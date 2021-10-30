const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'be280420',
    database: 'computer-inventory'
})

module.exports = conexao