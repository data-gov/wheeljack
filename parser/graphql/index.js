const fetch = require('node-fetch')
const ApolloClient = require('apollo-client').default
const { HttpLink, InMemoryCache } = require('apollo-client-preset')

exports.createGraphqlClient = async () => {
  return new ApolloClient({
    link: new HttpLink({ uri: process.env.GRAPHQL_API_URL, fetch }),
    cache: new InMemoryCache().restore({})
  })
}
