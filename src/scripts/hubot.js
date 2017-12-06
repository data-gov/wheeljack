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
//   FB_APP_ID
//   FB_APP_SECRET
//   FB_PAGE_ID
//   FB_PAGE_TOKEN
//   FB_VERIFY_TOKEN
//   FB_WEBHOOK_BASE
//   TOKEN
//   ROOM
//   TELEGRAM_TOKEN
//
// Author:
//   data-gov

const parser = require('../')
const ANYTHING = /.*/i
const { createGraphqlClient } = require('../graphql')
const { findCandidatesByRoleAndYear } = require('../graphql/queries/congressman')

function loggerMiddleware (robot) {
  return (context, next, done) => {
    robot.logger.info(`${context.response.message.user.name} asked me to ${context.response.message.text}`)
    next()
  }
}

async function parseMessage (res) {
  const userMessage = res.match.input
  const parsedMessage = await parser(userMessage)

  const post = parsedMessage.entities.post[0].value
  const year = new Date(parsedMessage.entities.datetime[0].value).getFullYear()

  const client = await createGraphqlClient()
  const result = await client.query({
    query: findCandidatesByRoleAndYear,
    variables: {
      role: post.toUpperCase(),
      year: year
    }
  })

  res.send(JSON.stringify(result.data.candidatesByRoleAndYear))
}

module.exports = robot => {
  robot.listenerMiddleware(loggerMiddleware(robot))
  robot.hear(ANYTHING, parseMessage)
}
