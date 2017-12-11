// Description:
//   Esse script escuta qualquer mensagem e a envia para um analisador
//   de linguagem natural que extrai a intencao para frase e gera uma
//   resposta baseado em dados historicos sobre as eleicoes do brasil
//
// Dependencies:
//   "hubot-fb": "^5.0.0",
//   "hubot-gitter": "^1.0.0",
//   "hubot-heroku-keepalive": "1.0.3",
//
// Configuration:
//  WIT_SERVER_TOKEN
//  GRAPHQL_API_URL
//  FB_APP_ID
//  FB_APP_SECRET
//  FB_PAGE_ID
//  FB_PAGE_TOKEN
//  FB_VERIFY_TOKEN
//  FB_WEBHOOK_BASE
//  HUBOT_LOG_LEVEL
//  TOKEN
//  ROOM
//  HUBOT_LOG_LEVEL
//  HUBOT_HEROKU_KEEPALIVE_URL
//
// Author:
//   data-gov

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
    console.error(error)
    res.send(random(errorMessages))
  }
}

module.exports = robot => {
  robot.listenerMiddleware(loggerMiddleware(robot))
  robot.hear(ANYTHING, parseMessage)
}
