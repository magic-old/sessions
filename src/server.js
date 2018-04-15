const rpc = require('@magic/rpc')

const actions = require('./actions')
const config = require('./config')

const init = () => {
  const server = rpc.server(actions, config.rpc)

  return server
}

module.exports = init
