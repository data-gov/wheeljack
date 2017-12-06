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
