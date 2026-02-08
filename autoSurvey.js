const { chromium, firefox } = require('playwright')
const readline = require('readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const ask = q => new Promise(res => rl.question(q, a => res(a)))

const USERNAME_SELECTORS = [
  'input[type="email"]',
  'input[name*="user" i]',
  'input[name*="login" i]',
  'input[name*="email" i]',
  'input[id*="user" i]',
  'input[id*="email" i]',
  'input[type="text"]'
]

const PASSWORD_SELECTORS = [
  'input[type="password"]',
  'input[name*="pass" i]',
  'input[id*="pass" i]'
]

const SUBMIT_SELECTORS = [
  'button[type="submit"]',
  'input[type="submit"]',
  'button[name*="login" i]',
  'button[id*="login" i]',
  'button'
]

async function smartFill(page, selectors, value) {
  for (const sel of selectors) {
    const el = await page.$(sel)
    if (el) {
      await el.fill(value)
      return true
    }
  }
  return false
}

async function smartSubmit(page) {
  for (const sel of SUBMIT_SELECTORS) {
    const el = await page.$(sel)
    if (el) {
      await el.click()
      return true
    }
  }
  const form = await page.$('form')
  if (form) {
    await form.evaluate(f => f.submit())
    return true
  }
  return false
}

;(async () => {
  try {
    const browserChoice = (await ask('Browser (brave | chrome | firefox | opera): ')).toLowerCase()
    const site = await ask('Login URL: ')
    const username = await ask('Username: ')
    const password = await ask('Password: ')
    rl.close()

    let browserType = chromium
    let launchOptions = { headless: false, args: ['--start-maximized'] }

    if (browserChoice === 'firefox') {
      browserType = firefox
    } else {
      browserType = chromium
      if (browserChoice === 'brave') {
        launchOptions.executablePath =
          'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'
        launchOptions.args.push('--disable-features=BraveShields')
      }
      if (browserChoice === 'opera') {
        launchOptions.executablePath =
          'C:\\Users\\%USERNAME%\\AppData\\Local\\Programs\\Opera\\opera.exe'
      }
    }

    const browser = await browserType.launch(launchOptions)
    const context = await browser.newContext({ viewport: null })
    const page = await context.newPage()

    await page.addInitScript(() => {
      function hasSurveyContext() {
        return (
          document.querySelectorAll('input[type=radio]').length > 0 ||
          document.querySelectorAll('select').length > 0
        )
      }

      function pickRadio() {
        const rs = [...document.querySelectorAll('input[type=radio]')].filter(r => !r.checked)
        if (!rs.length) return null
        return rs[Math.floor(Math.random() * rs.length)]
      }

      function pickSelect() {
        const s = document.querySelector('select')
        if (!s || s.options.length < 2) return null
        s.selectedIndex = Math.floor(Math.random() * (s.options.length - 1)) + 1
        s.dispatchEvent(new Event('change', { bubbles: true }))
        return s
      }

      function goNext() {
        const nexts = [
          'button[type=submit]',
          'button[name*=next i]',
          'button[id*=next i]',
          'button'
        ]
        for (const sel of nexts) {
          const b = document.querySelector(sel)
          if (b) {
            b.click()
            return
          }
        }
        const f = document.querySelector('form')
        if (f) f.submit()
      }

      setInterval(() => {
        try {
          if (!hasSurveyContext()) return
          let acted = false
          const r = pickRadio()
          if (r) {
            r.checked = true
            r.click()
            acted = true
          }
          if (!acted) {
            const s = pickSelect()
            if (s) acted = true
          }
          if (acted) goNext()
        } catch {}
      }, 300)
    })

    await page.goto(site, { waitUntil: 'domcontentloaded' })
    await smartFill(page, USERNAME_SELECTORS, username)
    await smartFill(page, PASSWORD_SELECTORS, password)

    await Promise.all([
      page.waitForNavigation({ timeout: 15000 }).catch(() => {}),
      smartSubmit(page)
    ])

    console.log('Auto Survey Engine running')
  } catch (e) {
    console.error('Error:', e.message)
    rl.close()
  }
})()
