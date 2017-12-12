const { query } = require('../graphql/client')
const {
  candidatesByRoleAndYearMessages,
  topVotingStateMessages,
  electionWinnerMessages,
  candidateVotesMessages,
  mostVotedInYearByStateMessages
} = require('../answers/dynamic')
const {
  findTopVotingState,
  findElectionWinner,
  findMostVotedInYearByState,
  findCandidatesByRoleAndYear,
  findCandidateVotesInAYearByNameAndState
} = require('../graphql/queries/election')

exports.answerWithCandidatesByRoleAndYear = async (year, role) => {
  const queryResult = await query(findCandidatesByRoleAndYear, {role, year})
  const result = queryResult.data.candidatesByRoleAndYear
  return candidatesByRoleAndYearMessages(result, year, role)
}

exports.answerWithCandidatesVotesByYearAndState = async (year, state, name) => {
  const queryResult = await query(findCandidateVotesInAYearByNameAndState, { name, state, year })
  const result = queryResult.data.findCandidateVotesInAYearByNameAndState
  return candidateVotesMessages(result, name, state, year)
}

exports.topVotingState = async (year, name) => {
  const queryResult = await query(findTopVotingState, { year, name })
  const result = queryResult.data.topVotingState
  return topVotingStateMessages(result, year, name)
}

exports.mostVotedInYearByState = async (year, state) => {
  const queryResult = await query(findMostVotedInYearByState, { year, state })
  const result = queryResult.data.mostVotedInYearByState
  return mostVotedInYearByStateMessages(result, year, state)
}

exports.electionWinner = async (year) => {
  const queryResult = await query(findElectionWinner, { year })
  const winner = queryResult.data.electionWinner
  return electionWinnerMessages(winner)
}
