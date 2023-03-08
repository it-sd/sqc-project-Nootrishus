require('../server.js')

describe('Passwords server', function () {
  const baseUrl = '../index.html'

  describe("GET '/'", function () {
    it('should return 200', async function () {
      const url = new URL('/', baseUrl)
      const res = await fetch(url)
      expect(res.status).toBe(200)
    })
  })

  describe("POST '/password'", function () {
    const url = new URL('/password', baseUrl)

    it('should accept valid passwords', async function () {
      const password = "valid_password"
      const body = JSON.stringify({ password })

      const mainTag = document.querySelector('main')
      mainTag.innerHTML = '<h1>Please wait</h1>'

      const res = await fetch(url, {
        method: 'POST', 
        body,
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()

      if (data.success) {
        mainTag.innerHTML = '<h1>Success!</h1>'
      } else {
        mainTag.innerHTML = '<h1>Server error</h1>'
      }

      expect(data.success).toBe(true)
    })

    it('should reject invalid passwords', async function () {
      const password = 'invalid_password'
      const body = JSON.stringify({ password })

      const mainTag = document.querySelector('main')
      mainTag.innerHTML = '<h1>Please Wait</h1>'

      const res = await fetch(url, {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()

      if (data.success) {
        mainTag.innerHTML = '<h1>Success!</h1>'
      } else {
        mainTag.innerHTML = '<h1>Server error</h1>'
      }

      expect(data.success).toBe(false)
    })
  })
})
