exports.candidatesByRoleAndYearMessages = (candidates, year, role) => {
  const failure = `Não houveram eleições para o cargo de ${role} em ${year}`
  const success = `As pessoas que se candidataram ao cargo de ${role} em ${year} foram: \r\n${candidates.join('\r\n')}`
  return candidates ? success : failure
}

exports.candidateVotesMessages = (result, name, state, year) => {
  const { votes } = result
  const success = `Em ${state}, ${name} teve ${votes.first} no primeiro turno e ${votes.second} no segundo turno`
  const failure = `${name} não participou das eleições de ${year}`
  return result ? success : failure
}

exports.topVotingStateMessages = (result, year, name) => {
  const { state, votes } = result
  const failure = `Eh provavel que ${name} nao se candidatou as eleicoes de ${year}`
  const success = `O estado que mais votou em ${name} no ano de ${year} foi ${state} com um total de ${votes.total} votos.`
  return result ? success : failure
}

exports.mostVotedInYearByStateMessages = (result, year, state) => {
  const { name, votes } = result
  const failure = `Aconteceu um erro ao procurar o candidato mais votado de ${state} em ${year}`
  const success = `O candidato mais votado de ${state} em ${year} foi ${name} com ${votes.total} votos.`
  return result ? success : failure
}
