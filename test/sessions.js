const { client } = require('@magic/rpc')
const { promise } = require('@magic/test')

const config = require('../src/config.js')
const cl = client(config.rpc)

const isObject = o => typeof o === 'object'

const fns = {
  get: [
    {
      fn: promise(r => cl.Get({}, r)),
      expect: error => error.code === 3,
    },
    {
      fn: promise(r => cl.Get({}, r)),
      expect: error => error.message.indexOf('3 INVALID_ARGUMENT:') === 0,
    },
    {
      fn: promise(r => cl.Get({ key: 'test' }, r)),
      expect: data => isObject(data),
    },
    {
      fn: promise(r => cl.Get({ key: 'test' }, r)),
      expect: data => data && data.token === 'ohai',
    },
  ],
  set: [
    {
      fn: promise(r => cl.Set({}, r)),
      expect: error => error.code === 3,
    },
    {
      fn: promise(r => cl.Set({}, r)),
      expect: error => error.message.indexOf('3 INVALID_ARGUMENT:') === 0,
    },
    {
      fn: promise(r => cl.Set({ key: 'test' }, r)),
      expect: isObject,
    },
    {
      fn: promise(r => cl.Set({ key: 'test' }, r)),
      expect: data => data && typeof data.token !== 'undefined',
    },
  ],
}

module.exports = fns
