const { createGraphqlClient } = require('../graphql')
const { findCandidatesByRoleAndYear, findCandidateVotesInAYearByNameAndState } = require('../graphql/queries/congressman')

exports.answerWithCandidatesByRoleAndYear = async (entities) => {
  const post = entities.post[0].value
  const year = new Date(entities.datetime[0].value).getFullYear()

  const client = await createGraphqlClient()
  const queryResult = await client.query({
    query: findCandidatesByRoleAndYear,
    variables: {
      role: post.toUpperCase(),
      year: year
    }
  })

  return queryResult.data.candidatesByRoleAndYear
    ? `As pessoas que se candidataram ao cargo de ${post} em ${year} foram: \r\n${queryResult.data.candidatesByRoleAndYear.join('\r\n')}`
    : `Não houveram eleições para o cargo de ${post} em ${year}`
}

exports.answerWithCandidatesVotesByYearAndState = async (entities) => {
  const year = new Date(entities.datetime[0].value).getFullYear()
  const candidate = entities.candidateName[0].value
  const state = entities.brState[0].value

  const client = await createGraphqlClient()
  const queryResult = await client.query({
    query: findCandidateVotesInAYearByNameAndState,
    variables: {
      name: candidate.toUpperCase(),
      state: state.toUpperCase(),
      year: year
    }
  })

  const result = queryResult.data.candidateVotesByState

  return result
    ? `Em ${state}, ${candidate} teve ${result.votes.first} no primeiro turno e ${result.votes.second} no segundo turno`
    : `${candidate} não participou das eleições de ${year}`
}
