const express = require('express')
const mysql = require('mysql2')
const router = express.Router()
const db = require('./db')

router.get('/', (request, response) => {
  const statement = `select * from Employee_TB`;
  db.query(statement, (error, data) => {
    if (error) {
      response.send('error')
    } else {
      response.send(data)
    }
  })
})



module.exports = router
