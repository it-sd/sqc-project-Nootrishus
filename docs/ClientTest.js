const { Builder, By } = require('selenium-webdriver')

describe('Passwords client', function () {
  const baseUrl = '../index.html'
  let driver

  describe("on '/'", function () {
    beforeEach(async function () {
      driver = await new Builder().forBrowser('firefox').build()
      await driver.get(baseUrl)
    })

    afterEach(async function () {
      await driver.quit()
    })

    it("should have a title named 'Choose a password'", async function () {
      const title = await driver.getTitle()
      expect(title).toBe('Choose a password')
    })

    it('should accept valid passwords', async function () {
      const passwordInput = await driver.findElement(By.id('password'))
      const submitButton = await driver.findElement(By.id('submit'))

      await passwordInput.sendKeys('valid_password')

      await submitButton.click()

      await driver.wait(() => 
      driver.findElement(By.css('main')).getText()
      !== 'Choose your password form'
      )

      const mainTag = await driver.findElement(By.css('main'))
      const mainTagText = await mainTag.getText()
      expect(mainTagText).toBe('Success!')
    })
  })
})
