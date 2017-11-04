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

Voce precisará criar um arquivo `.env` após clonar o repositório, na pasta raiz do projeto e adicionar

```
GRAPHQL_API_URL=https://optimus-prime-graphql.herokuapp.com/graphql
FB_WEBHOOK_BASE=https://wheeljack.herokuapp.com
FB_PAGE_ID=DataGov-550568748615136
WIT_SERVER_TOKEN=<ACCESS_TOKEN>
TOKEN=<GITTER TOKEN>
HUBOT_LOG_LEVEL=debug
FB_APP_ID=<APP ID>
FB_APP_SECRET=<APP SECRET>
FB_PAGE_TOKEN=<PAGE TOKEN>
FB_VERIFY_TOKEN=<VERIFICATION TOKEN>
TELEGRAM_TOKEN='<TOKEN>'
```

Se quiser configurar seu próprio bot e não tiver as variáveis acima, siga [este guia para usar no facebook](https://github.com/chen-ye/hubot-fb/blob/master/INSTALL.md), e/ou [este guia para usar no gitter](https://github.com/kcjpop/hubot-gitter), e/ou [este guia para usar no telegram](https://github.com/lukefx/hubot-telegram)
