const express = require('express')
const app = express()
var cors = require('cors')
var path = require('path')
//var router = express.Router()

const homeroute = require('./routes/home')
const footballRoute = require('./routes/football')

app.use(express.static(path.join(__dirname, '/build')))
app.use(cors())
app.use('/', homeroute)
app.use('/football', footballRoute)

app.get('*', (req, resp) => {
    resp.sendFile(path.join(__dirname, '/backend/index.html'))
})


// app.get('/', (req, resp) => {
//     resp.send('hello this is my backend')
// })



app.listen(3001, () => {
    console.log(`listening on port 3001`)
})