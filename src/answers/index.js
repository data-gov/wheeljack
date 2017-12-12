const { query } = require('../graphql/client')
const {
  findCandidatesByRoleAndYear,
  findCandidateVotesInAYearByNameAndState,
  topVotingState,
  mostVotedInYearByState
} = require('../graphql/queries/election')

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

exports.topVotingState = async (year, name) => {
  const queryResult = await query(topVotingState, { name, year })
  const result = queryResult.data.topVotingState
  const { state, votes } = result

  const failure = `Eh provavel que ${name} nao se candidatou as eleicoes de ${year}`
  const success = `O estado que mais votou em ${name} no ano de ${year} foi ${state} com um total de ${votes.total} votos.`

  return result ? success : failure
}

exports.mostVotedInYearByState = async (year, state) => {
  const queryResult = await query(mostVotedInYearByState, { year, state })
  const result = queryResult.data.mostVotedInYearByState
  const { name, votes } = result
  const failure = `Aconteceu um erro ao procurar o candidato mais votado de ${state} em ${year}`
  const success = `O candidato mais votado de ${state} em ${year} foi ${name} com ${votes.total} votos.`
  return result ? success : failure
}
