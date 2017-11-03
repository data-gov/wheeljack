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
WIT_SERVER_TOKEN='<ACCESS_TOKEN>'
GRAPHQL_API_URL='https://optimus-prime-graphql.herokuapp.com/graphql'
```
As variaveis de ambiente sāo injetadas durante o `npm start`
