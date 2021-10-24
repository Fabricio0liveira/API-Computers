const express = require('express')
const consign = require('consign')

module.exports = () => {
    const app = express()

    // The consign will group all the routes we create within the app.
    consign()
        .include('controllers')
        .into(app)

    return app
}