const express = require('express')
const app = express()

app.use(function (req, res, next) {
  console.log('1')
  next(new Error('这是一个错误'))
  console.log('2')
})

app.use(function (req, res, next) {
  console.log('3')
  res.status(200).end()
  console.log('4')
})

app.listen(3000)