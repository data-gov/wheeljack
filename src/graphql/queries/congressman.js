import gql from 'graphql-tag'

export const mostVotedCongressmanByState = gql`
query($state: String!) {
  mostVotedCongressmanByState(state: $state) {
    id,
    name
  }
}
`
