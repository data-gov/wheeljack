
const plnParser = require('./wit')
const { greetings, random, invalidQuestion, farewells } = require('./messages')
const {
  answerWithCandidatesVotesByYearAndState,
  answerWithCandidatesByRoleAndYear,
  mostVotedInYearByState,
  topVotingState
} = require('./answers')

const extractPost = post => post[0].value.toUpperCase()
const extractState = brState => brState[0].value.toUpperCase()
const extractYear = date => new Date(date[0].value).getFullYear()
const extractCandidateName = president => president[0].value.toUpperCase()

exports.answer = async (message) => {
  const parsedMessage = await plnParser.message(message, {})

  const entities = parsedMessage.entities

  if (entities.hasOwnProperty('candidatesByRoleAndYear')) {
    const { datetime, post } = entities
    return answerWithCandidatesByRoleAndYear(
      extractYear(datetime),
      extractPost(post)
    )
  }

  if (entities.hasOwnProperty('findCandidateVotesInAYearByNameAndState')) {
    const { datetime, president, brState } = entities
    return answerWithCandidatesVotesByYearAndState(
      extractYear(datetime),
      extractState(brState),
      extractCandidateName(president)
    )
  }

  if (entities.hasOwnProperty('topVotingState')) {
    return topVotingState(entities)
  }

  if (entities.hasOwnProperty('mostVotedInYearByState')) {
    return mostVotedInYearByState(entities)
  }

  if (entities.hasOwnProperty('greeting')) {
    return random(greetings)
  }

  if (entities.hasOwnProperty('farewells')) {
    return random(farewells)
  }

  return random(invalidQuestion)
}
