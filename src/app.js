
import { createGraphqlClient } from './config/apollo'
import { mostVotedCongressmanByState } from './graphql/queries/congressman'

createGraphqlClient()
  .then(client => {
    client.query({
      query: mostVotedCongressmanByState,
      variables: { state: 'RS' }
    })
      .then(data => console.log(data))
      .catch(error => console.error(error))
  })
  .catch(error => console.error(error))
