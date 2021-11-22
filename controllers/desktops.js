const { deleteComputer } = require('../models/desktops')
const Computers = require('../models/desktops')

module.exports = app => {
    
    //// List all computers 
    app.get('/computers', (req, res) => {
        Computers.listComputers(res)
    })

    // List computer by Id
    app.get('/computers/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Computers.searchById(id, res)
    })

    // Registering new computers
    app.post('/computers', (req, res) => {
        const computer = req.body

        Computers.add(computer, res)
    })

    // Chance computer information
    app.patch('/computers/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body

        Computers.changeInformation(id, values, res)
    })

    app.delete('/computers/:id', (req, res) => {
        const id = parseInt(req.params.id)

        deleteComputer(id, res)
        
    })
}




