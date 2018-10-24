const express = require('express')
const i = 0

const app = express()
const router = require('./style-handler')

const crossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  next()
 }

app.use(crossDomain)
app.use('/', router)

app.listen(8089, function () {
  console.log('style is watching...')
})
