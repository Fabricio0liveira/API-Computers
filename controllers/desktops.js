const Computers = require('../models/desktops')

module.exports = app => {
    app.get('/computers', (req,res) => {
        res.send('Voçê está na rota de computadores e está realizando um GET')
    })

    app.post('/computers', (req, res) => {
        const computer = req.body

        Computers.add(computer)
        
        console.log(req.body)
        res.send('Voçê está na rota computadores e está enviando um POST')
    })
}




