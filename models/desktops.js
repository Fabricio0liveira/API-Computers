const connectionDb = require('../infrastructure/connection')

class Computers {
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
                    res.status(201).json(results)
                }
            })
        }
    }
}

module.exports = new Computers