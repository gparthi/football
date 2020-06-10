var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')
var config = require('config')

const API_KEY = config.get("apiKey")
const hostname = config.get("host")
var validCountries = []

router.get('/getCountries', function (req, resp) {
    if (!validateKey(API_KEY)) {
        resp.status(401)
        return
    }
    fetch(`${hostname}/?action=get_countries&APIkey=${API_KEY}`)
        .then(res => res.json())
        .then(json => {
            console.log(`get countries ${JSON.stringify(json)}`)
            resp.json(json)
            validCountries.length <= 0 &&
                    json.forEach(data => {
                        console.log(`country is ${data.country_id}`)
                        validCountries.push(data.country_id);
                    });
            console.log(`validCountries are ${validCountries}`)        
        })
})

router.get('/leagues/:countryID', (req, resp) => {
    if (!validateKey(API_KEY)) {
        resp.status(401)
        return
    }
    if (!validCountries.includes(req.params.countryID)) {
        resp.status(401).json({"Error" : "Not valid input"})
        return
    }

    fetch(`${hostname}/?action=get_leagues&country_id=${req.params.countryID}&APIkey=${API_KEY}`)
        .then(res => res.json())
        .then(json => {
            console.log(`get leagues ${JSON.stringify(json)}`)
            resp.json(json)
            
        });
})

router.get('/teams/:leagueID', (req, resp) => {
    if (!validateKey(API_KEY)) {
        resp.status(401)
        return
    }
    //todo: validate teams and league id from input
    fetch(`${hostname}/?action=get_teams&league_id=${req.params.leagueID}&APIkey=${API_KEY}`)
        .then(res => res.json())
        .then(json => {
            console.log(`get teams ${JSON.stringify(json)}`)
            resp.json(json)
        });
})

router.get('/standings/:leagueID', (req, resp) => {
      //todo: validate standings and league id from input
    if (!validateKey(API_KEY)) {
        resp.status(401)
        return
    }
    fetch(`${hostname}/?action=get_standings&league_id=${req.params.leagueID}&APIkey=${API_KEY}`)
        .then(res => res.json())
        .then(json => {
            console.log(`get standings ${JSON.stringify(json)}`)
            resp.json(json)
        });
})

function validateKey(params) {
    var pattern = /^[0-9a-zA-Z]+$/; 
    if(params.match(pattern)) {
        console.log(`${params} validation pass`)
        return true
    }
    console.log(`${params} validation fails`)
    return false
}

module.exports = router