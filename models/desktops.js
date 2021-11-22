const connectionDb = require('../infrastructure/connection')

class Computers {

    // Registering new computers
    add(computer, res) {
        const data = new Date()

        // Validating input fields
        const validateMarca = computer.marca.length >= 1
        const validateModelo = computer.modelo.length >= 1
        const validatePatrimonio = computer.patrimonio.length >= 5

        const validations = [
            {
                name: 'marca',
                valid: validateMarca,
                message: 'marca não deve ser igual a vazio, favor preencher.'
            },
            {
                name: 'modelo',
                valid: validateModelo,
                message: 'modelo não deve ser igual a vazio, favor preencher.'
            },
            {
                name: 'patrimonio',
                valid: validatePatrimonio,
                message: 'Patrimonio precisa ter no mínimo 6 números para o registro'
            }
        ]


        const mistakes = validations.filter(field => !field.valid)
        const thereIsErrror = mistakes.length
        
        if(thereIsErrror) {
            res.status(400).json(mistakes)
        } else {
            const updateRecord = {...computer, data}

            const sql = 'INSERT INTO Computers SET ?'

            connectionDb.query(sql, updateRecord, (erro, results) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(updateRecord)
                }
            })
        }
    }

    // List all computers
    listComputers(res) {
        const sql = 'SELECT * FROM Computers'

        connectionDb.query(sql, (erro, results) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(results)
            }
        })
    }

    // List computer by id
    searchById(id, res) {
        const sql = `SELECT * FROM Computers WHERE id=${id} `

        connectionDb.query(sql, (erro, results) => {
            const computer = results[0]

            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(computer)
            }
        })
    }

    // Chance computer information
    changeInformation(id, values, res) {
        // Add field validations in this part of computer data change

        const sql = 'UPDATE Computers SET ? WHERE id=?'

        connectionDb.query(sql, [values, id], (erro, results) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...values, id})
            }
        })
    }

    // Delete computer registry by id
    deleteComputer(id, res) {
        const sql = 'DELETE FROM Computers WHERE id=?'

        connectionDb.query(sql, id, (erro, results) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Computers