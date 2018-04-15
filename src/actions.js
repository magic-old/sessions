const invalidKeyError = {
  code: 3,
}

const actions = {
  Get: (call, cb) => {
    const { key } = call.request

    if (!key) {
      return cb(invalidKeyError)
    }

    console.log('call Get cb', key)

    cb(null, { token: 'ohai' })
  },
  Set: (call, cb) => {
    const { key } = call.request

    if (!key) {
      return cb(invalidKeyError)
    }

    cb(null, { token: 'ohai' })
  },
}

module.exports = actions
