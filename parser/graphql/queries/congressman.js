const gql = require('graphql-tag')

exports.mostVotedCongressmanByState = gql`
query($state: String!) {
  mostVotedCongressmanByState(state: $state) {
    id,
    name
  }
}
`
