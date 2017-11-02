const { createGraphqlClient } = require('./graphql/client')
const { mostVotedCongressmanByState } = require('./graphql/queries/congressman')
const plnParser = require('./wit')

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

plnParser.message('Qual candidato foi o mais votado no RS', {})
  .then((data) => {
    console.log('Yay, got Wit.ai response: \n' + JSON.stringify(data))
  })
  .catch(console.error)
