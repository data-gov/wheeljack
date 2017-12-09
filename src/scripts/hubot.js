const { errorMessages, random } = require('../messages')
const { answer } = require('../')
const ANYTHING = /.*/i

function loggerMiddleware (robot) {
  return (context, next, _) => {
    robot.logger.info(`${context.response.message.user.name} asked me to ${context.response.message.text}`)
    next()
  }
}

async function parseMessage (res) {
  const userMessage = res.match.input
  try {
    const response = await answer(userMessage)
    res.send(response)
  } catch (error) {
    console.error(JSON.stringify(error))
    res.send(random(errorMessages))
  }
}

module.exports = robot => {
  robot.listenerMiddleware(loggerMiddleware(robot))
  robot.hear(ANYTHING, parseMessage)
}
