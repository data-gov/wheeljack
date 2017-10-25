import fetch from 'node-fetch'
import ApolloClient from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'

export const createGraphqlClient = async () => {
  return new ApolloClient({
    link: new HttpLink({ uri: 'https://optimus-prime-graphql.herokuapp.com/graphql', fetch }),
    cache: new InMemoryCache().restore({})
  })
}
