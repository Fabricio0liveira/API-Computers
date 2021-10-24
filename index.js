const PORT = 3000

// Exporting customExpress
const customExpress = require('./config/customExpress')
const app = customExpress()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

