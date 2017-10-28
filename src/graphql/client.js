import fetch from 'node-fetch'
import ApolloClient from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'

export const createGraphqlClient = async () => {
  return new ApolloClient({
    link: new HttpLink({ uri: process.env.GRAPHQL_API_URL, fetch }),
    cache: new InMemoryCache().restore({})
  })
}
