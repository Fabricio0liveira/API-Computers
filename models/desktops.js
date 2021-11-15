const connectionDb = require('../infrastructure/connection')

class Computers {
    add(computer) {
        const sql = 'INSERT INTO Computers SET ?'

        connectionDb.query(sql, computer, (erro, results) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(results)
            }
        })
    }
}

module.exports = new Computers