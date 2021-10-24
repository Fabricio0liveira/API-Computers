module.exports = app => {
    app.get('/desktops', (req,res) => {
        res.send('Voçê está na rota de computadores e está realizando um GET')
    })
}


