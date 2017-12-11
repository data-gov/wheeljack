const gql = require('graphql-tag')

exports.findCandidatesByRoleAndYear = gql`
  query($role: String!, $year: Int! ) {
    candidatesByRoleAndYear(role: $role, year: $year)
  }
`

exports.findCandidateVotesInAYearByNameAndState = gql`
  query($name: String!, $state: String!, $year: Int!) {
    findCandidateVotesInAYearByNameAndState(name: $name, state: $state, year: $year) {
      votes {
        first
        second
        total
      }
    }
  }
`

exports.mostVotedInYearByState = gql`
  query ($state: String!, $year: Int!, $shift: Int) {
    mostVotedInYearByState (state: $state, year: $year, shift: $shift){
      name
      year
      state
      votes {
        first
        second
        total
      }
    }
  }
`

exports.topVotingState = gql`
  query ($name: String!, $year: Int!, $shift: Int) {
    topVotingState(name: $name, year: $year, shift: $shift){
      name
      year
      state
      votes {
        first
        second
        total
      }
    }
  }
`
