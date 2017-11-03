const { Wit, log } = require('node-wit')
const logLevel = process.env.NODE_ENV === 'production' ? log.WARN : log.DEBUG

module.exports = new Wit({
  accessToken: process.env.WIT_SERVER_TOKEN,
  logger: new log.Logger(logLevel)
})
