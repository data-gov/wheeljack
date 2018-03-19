# WheelJack

[![Join the chat at https://gitter.im/data-gov/wheeljack](https://badges.gitter.im/data-gov/wheeljack.svg)](https://gitter.im/data-gov/wheeljack?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

The objective of this project is to create a conversational agent.

## Conversando com o Wheeljack
- [Telegram](https://telegram.me/wheeljack_bot)
- [Gitter](https://gitter.im/data-gov/wheeljack)
- [Facebook](https://www.facebook.com/DataGov-550568748615136/)

## Rodando wheeljack localmente
- git clone git@github.com:data-gov/wheeljack.git && cd wheeljack
- npm install
- npm run hubot
Só isso, voce já pode conversar com wheeljack pelo terminal.

### Variaveis de ambiente
Voce precisará criar um arquivo `.env` após clonar o repositório, na pasta raiz do projeto e adicionar
```
GRAPHQL_API_URL=https://optimus-prime-graphql.herokuapp.com/graphql
FB_WEBHOOK_BASE=https://wheeljack.herokuapp.com
FB_PAGE_ID=DataGov-550568748615136
HUBOT_LOG_LEVEL=debug
WIT_SERVER_TOKEN=<ACCESS_TOKEN>
TOKEN=<GITTER TOKEN>
FB_APP_ID=<APP ID>
FB_APP_SECRET=<APP SECRET>
FB_PAGE_TOKEN=<PAGE TOKEN>
FB_VERIFY_TOKEN=<VERIFICATION TOKEN>
TELEGRAM_TOKEN='<TOKEN>'
```

## Configurando seu próprio bot
Se quiser configurar seu próprio bot e não tiver as variáveis acima, siga [este guia para usar no facebook](https://github.com/chen-ye/hubot-fb/blob/master/INSTALL.md), e/ou [este guia para usar no gitter](https://github.com/kcjpop/hubot-gitter), e/ou [este guia para usar no telegram](https://github.com/lukefx/hubot-telegram).

## Perguntas que o Wheeljack responde

### Saudações
  1. Oi
  2. Olá
  3. Tudo bom
  4. Tchau
  5. Bye

### Questões sobre eleições presidenciais
  1. Quais foram os candidatos a presidencia no ano de <ANO DA ELEIÇÃO> ?
  2. Quem foi o candidato presidencial mais votado no <ESTADO> em <ANO DA ELEIÇÃO>?
  3. Qual foi o estado que mais votou no <CANDIDATO> em <ANO DA ELEIÇÃO>?
  4. Quem venceu as eleições presidenciais em <ANO DA ELEIÇAO> ?
  5. Quantos votos o <CANDIDATO> teve no <ESTADO> no ano de <ANO DA ELEIÇÃO>?

