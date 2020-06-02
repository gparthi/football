const {describe} = require('mocha')
const express = require('express')
const api = require('../routes/football')
const chai = require('chai')
const chai_http = require('chai-http')
const server = express()
const should = chai.should()

chai.use(chai_http)


describe('test football apis', () => {

    it("get countries test", (done) => {
        chai.request("http://localhost:3001")
        .get("/football/getCountries")
        .end((error, resp) => {
            console.log(`resp = ${JSON.stringify(resp)}`)
            should.exist(resp)
            done()
        })
                  
    })

    it("get countries test", (done) => {
        chai.request("http://localhost:3001")
        .get("/football/leagues/41")
        .end((error, resp) => {
            console.log(`resp = ${JSON.stringify(resp)}`)
            should.exist(resp)
            done()
        })      
    })

    it("get countries test", (done) => {
        chai.request("http://localhost:3001")
        .get("/football/teams/149")
        .end((error, resp) => {
            console.log(`resp = ${JSON.stringify(resp)}`)
            should.exist(resp)
            done()
        })      
    })
})