exports.random = messages =>
  messages[Math.floor(Math.random() * messages.length)];
exports.errorMessages = [
  'Algo de errado aconteceu',
  'Tive um problema ao processar sua pergunta',
];
exports.greetings = [
  'Ola!',
  'Como vai?',
  'Tudo bem?',
  'Olá, em que posso ajudar?',
];
exports.invalidQuestion = [
  'Nao entendi sua pergunta',
  'Poderia perguntar outra coisa?',
];
exports.farewells = [
  'Tchau!',
  'Ate mais',
  'Tenha um excelente dia!',
  'Até a próxima',
];
