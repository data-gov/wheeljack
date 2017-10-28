import { createGraphqlClient } from './config/apollo'
import { mostVotedCongressmanByState } from './graphql/queries/congressman'
import DotEnv from 'dotenv'
DotEnv.config()

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
