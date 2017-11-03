require('dotenv').config()
const plnParser = require('./wit')

module.exports = async (message) => {
  try {
    return await plnParser.message(message, {})
  } catch (error) {
    console.error(error)
  }
}
