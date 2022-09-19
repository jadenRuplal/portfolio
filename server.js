const express = require('express')



const clientDevPort = 3000

const app = express()



app.use(
    `http://localhost:${clientDevPort}`
)


module.exports = app

