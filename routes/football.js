var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')
const API_KEY = '9bb66184e0c8145384fd2cc0f7b914ada57b4e8fd2e4d6d586adcc27c257a978'

router.get('/getCountries', function (req, resp) {
    fetch(`https://apiv2.apifootball.com/?action=get_countries&APIkey=${API_KEY}`)
        .then(res => res.json())
        .then(json => {
            console.log(`get countries ${JSON.stringify(json)}`)
            resp.json(json)
        });
})

router.get('/leagues/:countryID', (req, resp) => {
    fetch(`https://apiv2.apifootball.com/?action=get_leagues&country_id=${req.params.countryID}&APIkey=${API_KEY}`)
        .then(res => res.json())
        .then(json => {
            console.log(`get leagues ${JSON.stringify(json)}`)
            resp.json(json)
        });
})

router.get('/teams/:leagueID', (req, resp) => {
    fetch(`https://apiv2.apifootball.com/?action=get_teams&league_id=${req.params.leagueID}&APIkey=${API_KEY}`)
        .then(res => res.json())
        .then(json => {
            console.log(`get teams ${JSON.stringify(json)}`)
            resp.json(json)
        });
})

router.get('/standings/:leagueID', (req, resp) => {
    fetch(`https://apiv2.apifootball.com/?action=get_standings&league_id=${req.params.leagueID}&APIkey=${API_KEY}`)
        .then(res => res.json())
        .then(json => {
            console.log(`get standings ${JSON.stringify(json)}`)
            resp.json(json)
        });
})


module.exports = router