const express = require('express')
const router = express.Router()
let i = 0

router.get('/style-change', function (req, res, next) {
  i++
  res.send()
})

router.get('/style-changed', function (req, res, next) {
  res.send(`${i}`)
})

module.exports = router
