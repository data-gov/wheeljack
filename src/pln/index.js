const WIT_AI_TOKEN = ''
const {Wit} = require('node-wit')

const plnParser = new Wit({
  accessToken: WIT_AI_TOKEN
})

module.exports = plnParser
