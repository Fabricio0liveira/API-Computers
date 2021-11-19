const connectionDb = require('../infrastructure/connection')

class Computers {
    add(computer, res) {
        const data = new Date()
        const updateRecord = {...computer, data}

        const sql = 'INSERT INTO Computers SET ?'

        connectionDb.query(sql, updateRecord, (erro, results) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(results)
            }
        })
    }
}

module.exports = new Computers