const PORT = 3000

// Exporting customExpress
const customExpress = require('./config/customExpress')
const conexao = require('./infrastructure/connection')

// connecting to database
conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    }
})
const app = customExpress()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

