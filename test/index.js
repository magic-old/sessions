const run = require('@magic/test')

const sessions = require('./sessions')

const beforeAll = () => {
  const app = require('../src')
  console.log('start test server')

  return () => {
    app.forceShutdown()
  }
}

const tests = {
  sessions,
}

run(tests, beforeAll)
