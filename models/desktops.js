const moment = require('moment')
const connectionDb = require('../infrastructure/connection')

class Computers {
    add(computer) {
        // Adjusting the format for entering the date
        const data = moment(computer.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const updateRecord = {...computer, data}

        const sql = 'INSERT INTO Computers SET ?'

        connectionDb.query(sql, updateRecord, (erro, results) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(results)
            }
        })
    }
}

module.exports = new Computers