const parser = require('../')
const ANYTHING = /.*/i
const { answer } = require('../message')

function loggerMiddleware (robot) {
  return (context, next, _) => {
    robot.logger.info(`${context.response.message.user.name} asked me to ${context.response.message.text}`)
    next()
  }
}

async function parseMessage (res) {
  const userMessage = res.match.input
  const parsedMessage = await parser(userMessage)
  const message = await answer(parsedMessage)
  res.send(message)
}

module.exports = robot => {
  robot.listenerMiddleware(loggerMiddleware(robot))
  robot.hear(ANYTHING, parseMessage)
}
