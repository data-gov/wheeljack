const { createGraphqlClient } = require('./');

let client;

const getClient = async () => {
  if (client) {
    return client;
  }

  client = await createGraphqlClient();
  return client;
};

exports.query = async (query, variables) => {
  const normalizedVars = normalizeQueryVariables(variables);
  try {
    const client = await getClient();
    return client.query({ query, variables: normalizedVars });
  } catch (error) {
    console.error(error, JSON.stringify(error));
    throw new Error('Erro ao fazer query graphql');
  }
};

const normalizeQueryVariables = variables => {
  const normalizedVariables = {};
  const queryVariable = Object.keys(variables);

  queryVariable.forEach(key => {
    const value = variables[key];
    normalizedVariables[key] = isString(value) ? value.toUpperCase() : value;
  });

  return normalizedVariables;
};

const isString = value => typeof value === 'string' || value instanceof String;
