'use strict'

const toCamel = require('../../lib/object-to-camel')
const configure = require('../../lib/configure')
const toUrlSearchParams = require('../../lib/to-url-search-params')

module.exports = configure(api => {
  return async (options = {}) => {
    const res = await api.post('config/profile/list', {
      timeout: options.timeout,
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    const data = await res.json()

    return data.map(profile => toCamel(profile))
  }
})
