const { Wit, log } = require('node-wit')

const client = new Wit({
  accessToken: process.env.WIT_SERVER_TOKEN,
  logger: new log.Logger(log.DEBUG)
})

module.exports = client
