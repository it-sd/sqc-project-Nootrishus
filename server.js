require('dotenv').config() // Read environment variables from .env
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5163

const validatePassword = function (aPassword) {
  const constraints = [
    w => w.length >= 6,
    w => w.length <= 32,
    w => (/\p{Uppercase}/u).test(w),
    w => (/\p{Lowercase}/u).test(w),
    w => (/\P{Letter}/u).test(w)
  ]

  let isValid = true
  for (const constraint of constraints) {
    isValid = isValid && constraint(aPassword)
  }
  return isValid
}

module.exports = {
  validatePassword
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function (req, res) {
    res.render('pages/index')
  })
  .post('/password', async function (req, res) {
    const password = req.body.password

    if (validatePassword(password)) {
      //simulate server delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      res.json({ success: true })
    } else {
      res.json({ success: false })
    }
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
