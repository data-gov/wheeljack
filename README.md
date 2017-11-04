# WheelJack

[![Join the chat at https://gitter.im/data-gov/wheeljack](https://badges.gitter.im/data-gov/wheeljack.svg)](https://gitter.im/data-gov/wheeljack?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

The objective of this project is to create a conversational agent.


## Rodando wheeljack localmente

- git clone git@github.com:data-gov/wheeljack.git
- cd wheeljack
- yarn install ou npm install
- npm start

Voce precisará criar um arquivo `.env` após clonar o repositório, na pasta raiz do projeto e adicionar

```
WIT_SERVER_TOKEN=<ACCESS_TOKEN>
GRAPHQL_API_URL=https://optimus-prime-graphql.herokuapp.com/graphql
TOKEN=<GITTER TOKEN>
HUBOT_LOG_LEVEL=debug
FB_PAGE_ID=DataGov-550568748615136
FB_APP_ID=<APP ID>
FB_APP_SECRET=<APP SECRET>
FB_PAGE_TOKEN=<PAGE TOKEN>
FB_VERIFY_TOKEN=<VERIFICATION TOKEN>
FB_WEBHOOK_BASE=https://wheeljack.herokuapp.com
```

As variaveis de ambiente sāo injetadas durante o `npm start`

Se quiser configurar seu próprio bot e não tiver as variáveis acima, siga [este guia para usar no facebook](https://github.com/chen-ye/hubot-fb/blob/master/INSTALL.md), e/ou [este guia para usar no gitter](https://github.com/kcjpop/hubot-gitter)
