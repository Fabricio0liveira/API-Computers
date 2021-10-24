const express = require('express')
const PORT = 3000

const app = express()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/desktops', (req,res) => {
    res.send('Voçê está na rota de computadores')
})