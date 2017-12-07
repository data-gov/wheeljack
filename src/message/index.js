const { createGraphqlClient } = require('../graphql')
const { findCandidatesByRoleAndYear } = require('../graphql/queries/congressman')

exports.answer = async (parsedMessage) => {
  const entities = parsedMessage.entities
  if (entities.hasOwnProperty('candidatesByRoleAndYear')) {
    return answerWithCandidatesByRoleAndYear(entities)
  }
  if (entities.hasOwnProperty('greeting')) {
    return 'Olá, em que posso ajudar?'
  }

  return 'Não entendi a pergunta'
}

const answerWithCandidatesByRoleAndYear = async (entities) => {
  const post = entities.post[0].value
  const year = new Date(entities.datetime[0].value).getFullYear()

  const client = await createGraphqlClient()
  const queryResult = await client.query({
    query: findCandidatesByRoleAndYear,
    variables: {
      role: post.toUpperCase(),
      year: year
    }
  })

  return queryResult.data.candidatesByRoleAndYear
    ? `As pessoas que se candidataram ao cargo de ${post} em ${year} foram: \r\n${queryResult.data.candidatesByRoleAndYear.join('\r\n')}`
    : `Não houveram eleições para o cargo de ${post} em ${year}`
}
