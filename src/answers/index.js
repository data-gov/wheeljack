const { query } = require('../graphql/client')
const { findCandidatesByRoleAndYear, findCandidateVotesInAYearByNameAndState } = require('../graphql/queries/election')

exports.answerWithCandidatesByRoleAndYear = async (year, role) => {
  const queryResult = await query(findCandidatesByRoleAndYear, {role, year})
  const result = queryResult.data.candidatesByRoleAndYear

  const failure = `Não houveram eleições para o cargo de ${role} em ${year}`
  const success = `As pessoas que se candidataram ao cargo de ${role} em ${year} foram: \r\n${result.join('\r\n')}`

  return result ? success : failure
}

exports.answerWithCandidatesVotesByYearAndState = async (year, state, name) => {
  const queryResult = await query(findCandidateVotesInAYearByNameAndState, { name, state, year })
  const result = queryResult.data.findCandidateVotesInAYearByNameAndState

  const success = `Em ${state}, ${name} teve ${result.votes.first} no primeiro turno e ${result.votes.second} no segundo turno`
  const failure = `${name} não participou das eleições de ${year}`
  return result ? success : failure
}

exports.topVotingState = async (entities) => {
  return 'Buuuh'
}

exports.mostVotedInYearByState = async (entities) => {
  return 'Blaah'
}
