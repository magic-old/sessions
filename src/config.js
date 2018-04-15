const path = require('path')

const PROTO_PATH = path.join(__dirname, 'sessions.proto')

module.exports = {
  rpc: {
    host: 'localhost',
    port: 23523,
    service: 'Handler',
    package: 'session',
    path: PROTO_PATH,
  },
}
