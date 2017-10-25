import gql from 'graphql-tag'

export const mostVotedCongressmanByState = gql`
{
  mostVotedCongressmanByState(state: "RS") {
    id,
    name
  }
}
`
