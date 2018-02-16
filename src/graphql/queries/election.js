const gql = require('graphql-tag');

exports.findCandidatesByRoleAndYear = gql`
  query($role: String!, $year: Int!) {
    candidatesByRoleAndYear(role: $role, year: $year)
  }
`;

exports.findCandidateVotesInAYearByNameAndState = gql`
  query($name: String!, $state: String!, $year: Int!) {
    findCandidateVotesInAYearByNameAndState(
      name: $name
      state: $state
      year: $year
    ) {
      votes {
        first
        second
        total
      }
    }
  }
`;

exports.findMostVotedInYearByState = gql`
  query($state: String!, $year: Int!, $shift: Int) {
    mostVotedInYearByState(state: $state, year: $year, shift: $shift) {
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
`;

exports.findTopVotingState = gql`
  query($name: String!, $year: Int!, $shift: Int) {
    topVotingState(name: $name, year: $year, shift: $shift) {
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
`;
exports.findElectionWinner = gql`
  query($year: Int!) {
    electionWinner(year: $year)
  }
`;
