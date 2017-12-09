const gql = require('graphql-tag')

exports.mostVotedCongressmanByState = gql`
query($state: String!) {
  mostVotedCongressmanByState(state: $state) {
    id,
    name
  }
}
`

exports.findCandidatesByRoleAndYear = gql`
query($role: String!, $year: Int! ) {
  candidatesByRoleAndYear(role: $role, year: $year)
}
`

exports.findCandidateVotesInAYearByNameAndState = gql`
query($name: String!, $state: String!, $year: Int!) {
  candidateVotesByState(name: $name, state: $state, year: $year) {
    votes {
      first
      second
      total
    }
  }
}
`
