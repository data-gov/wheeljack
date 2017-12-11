const { createGraphqlClient } = require('./')

let client

const getClient = async () => {
  if (client) {
    return client
  }

  client = await createGraphqlClient()
  return client
}

exports.query = async (query, variables) => {
  try {
    const client = await getClient()
    return client.query({query, variables})
  } catch (error) {
    console.error(error, JSON.stringify(error))
    throw (new Error('Erro ao fazer query graphql'))
  }
}
