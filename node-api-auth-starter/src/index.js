const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const router = require('./router')

// Connect to  DB setup
// mongoose.connect('mongodb://localhost:mydb')

// App setup 
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }))
router(app)

const port = process.env.port || 3090
const server = http.createServer(app)
server.listen(port, () => {
    console.log('Server listening on port ' + port)
})