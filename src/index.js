const plnParser = require('./wit')
const { greetings, random, invalidQuestion } = require('./messages')
const { answerWithCandidatesByRoleAndYear } = require('./answers')

exports.answer = async (message) => {
  const parsedMessage = await plnParser.message(message, {})

  const entities = parsedMessage.entities
  if (entities.hasOwnProperty('candidatesByRoleAndYear')) {
    return answerWithCandidatesByRoleAndYear(entities)
  }
  if (entities.hasOwnProperty('greeting')) {
    return random(greetings)
  }

  return random(invalidQuestion)
}
