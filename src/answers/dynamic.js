const { random } = require('./static');

const smartAnswerExample = (state, name, votes, year) => {
  const onlyFirstShiftMessages = [
    `${name} teve ${
      votes.first
    } no primeiro turno e nao participou do segundo turno`,
    `Em ${year}, ${name} teve ${votes.first}`,
    `${name} teve ${votes.first}`,
    `${name} recebeu ${votes.first}, sem ter participado do segundo turno`,
    `Sem ter participado do segundo turno ${name} obteve um total de ${
      votes.total
    }`,
  ];

  const bothShifts = [
    `${name} teve em ${state} ${votes.first} votos no primeiro turno e ${
      votes.second
    } votos no segundo turno, totalizando ${
      votes.total
    } se somado os dois turnos`,
    `${name} recebeu em ${state} ${votes.first} votos no primeiro turno e ${
      votes.second
    } votos no segundo turno. Tendo um total de votos de ${
      votes.total
    } somando os dois turnos`,
    `${name} teve um total ${votes.total} sendo ${votes.first} no turno e ${
      votes.second
    } no segundo turno, somente no estado do ${state}`,
    `${name} teve um total de ${votes.total} votos no ${state}`,
    `${votes.total} votos no total, sendo ${votes.first} no primeiro turno e ${
      votes.second
    } no segundo.`,
    `${votes.total} votos no total, ${votes.first} no primeiro e ${
      votes.second
    } no segundo.`,
  ];

  return votes.second > 0 ? random(bothShifts) : random(onlyFirstShiftMessages);
};

exports.candidatesByRoleAndYearMessages = (candidates, year, role) => {
  const failure = `Não houveram eleições para o cargo de ${role} em ${year}`;
  const success = `As pessoas que se candidataram ao cargo de ${role} em ${year} foram: \r\n${candidates.join(
    '\r\n',
  )}`;
  return candidates ? success : failure;
};

exports.candidateVotesMessages = (result, name, state, year) => {
  const { votes } = result;
  const success = smartAnswerExample(state, name, votes, year);
  const failure = `${name} não participou das eleições de ${year}`;
  return result ? success : failure;
};

exports.topVotingStateMessages = (result, year, name) => {
  const { state, votes } = result;
  const failure = `É provável que ${name} nao se candidatou as eleicoes de ${year}`;
  const success = `O estado que mais votou em ${name} no ano de ${year} foi ${state} com um total de ${
    votes.total
  } votos (somando os dois turnos).`;
  return result ? success : failure;
};

exports.mostVotedInYearByStateMessages = (result, year, state) => {
  const { name, votes } = result;
  const failure = `Aconteceu um erro ao procurar o candidato mais votado de ${state} em ${year}`;
  const success = `O candidato mais votado de ${state} em ${year} foi ${name} com ${
    votes.total
  } votos, somando os votos dos dois turnos.`;
  return result ? success : failure;
};

exports.electionWinnerMessages = (winner, year) => {
  const failure = `Nao houveram eleições para presidente em ${year}`;
  const success = winner;
  return winner ? success : failure;
};
