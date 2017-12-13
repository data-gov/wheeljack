const plnParser = require('./wit')
const { greetings, random, invalidQuestion, farewells, errorMessages } = require('./answers/static')
const {
  answerWithCandidatesVotesByYearAndState,
  answerWithCandidatesByRoleAndYear,
  mostVotedInYearByState,
  electionWinner,
  topVotingState
} = require('./services/election')

const INVALID_RANGE = 'Invalid date'
const INVALID_ENTITY = 'Invalid Entity'

const extractState = brState => brState[0].value
const extractCandidateName = president => president[0].value
const extractPost = post => {
  if (!post) {
    return 'PRESIDENTE'
  }

  return post[0].value || 'PRESIDENTE'
}
const extractYear = datetime => {
  const year = new Date(datetime[0].value).getFullYear()
  if (year < 1998 || year > 2017) {
    throw (new Error(INVALID_RANGE))
  }

  return year
}

const answerBasedOnEntities = entities => {
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

  if (entities.hasOwnProperty('findElectionWinner')) {
    const { datetime } = entities
    return electionWinner(
      extractYear(datetime)
    )
  }

  if (entities.hasOwnProperty('greeting')) {
    return random(greetings)
  }

  if (entities.hasOwnProperty('farewells')) {
    return random(farewells)
  }

  throw (new Error(INVALID_ENTITY))
}

exports.answer = async (message) => {
  const parsedMessage = await plnParser.message(message, {})

  const entities = parsedMessage.entities

  try {
    return answerBasedOnEntities(entities)
  } catch ({message}) {
    if (message === INVALID_RANGE) {
      return 'Nao temos dados anteriores a 1998, poderia usar outra data como referencia?'
    }

    if (message === INVALID_ENTITY) {
      return random(invalidQuestion)
    }

    return random(errorMessages)
  }
}
