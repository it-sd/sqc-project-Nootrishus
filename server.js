require('dotenv').config() // Read environment variables from .env
const express = require('express')
const fetch = require('node-fetch')
const path = require('path')
const PORT = process.env.PORT || 5163
const API_KEY = process.env.PEXELS_API_KEY || 'l1u2fLDFwSnSUMGSdN8KMqEA7MFendqROd8xOqDYOTEbNZ6lnwEfBzKL'

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
  .get('/pexels', async function (req, res) {
    const query = 'ocean'
    const url = `https://api.pexels.com/v1/search?query=${query}`
    const headers = { Authorization: API_KEY}
    const response = await fetch(url, { headers })

    if (response.ok) {
      const data = await response.json()
      res.render('pages/pexels', { data })
    } else { 
      res.render('pages/error', { message: 'Failed to fetch data from Pexels API'})
    }
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
