const Computers = require('../models/desktops')

module.exports = app => {
    
    //// List all computers 
    app.get('/computers', (req, res) => {
        Computers.listComputers(res)
    })

    // List computer by Id
    app.get('/computers/:id', (req, res) => {
        const id = parseInt(req.params.id)
        // console.log(req.params)

        Computers.searchById(id, res)
    })

    // Registering new computers
    app.post('/computers', (req, res) => {
        const computer = req.body

        Computers.add(computer, res)
        
        // console.log(req.body)
    })
}




