const plnParser = require('./wit')
const { greetings, random, invalidQuestion, farewells } = require('./answers/static')
const {
  answerWithCandidatesVotesByYearAndState,
  answerWithCandidatesByRoleAndYear,
  mostVotedInYearByState,
  topVotingState
} = require('./services/election')

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
    const { datetime, president } = entities
    return topVotingState(
      extractYear(datetime),
      extractCandidateName(president)
    )
  }

  if (entities.hasOwnProperty('mostVotedInYearByState')) {
    const { datetime, brState } = entities
    return mostVotedInYearByState(
      extractYear(datetime),
      extractState(brState)
    )
  }

  if (entities.hasOwnProperty('greeting')) {
    return random(greetings)
  }

  if (entities.hasOwnProperty('farewells')) {
    return random(farewells)
  }

  return random(invalidQuestion)
}
