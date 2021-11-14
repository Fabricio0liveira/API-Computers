const PORT = 3000

// Exporting customExpress
const customExpress = require('./config/customExpress')
const connectionDb = require('./infrastructure/connection')

// connecting to database
connectionDb.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso!')

        const app = customExpress()

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }
})

