var express = require('express')
var router = express.Router()

router.get('/', (req, resp) => {
    console.log(`home page displayed`)
    resp.send('Hello home')
})

module.exports = router