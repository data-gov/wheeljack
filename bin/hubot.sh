#!/bin/sh

set -e

npm install
export PATH="node_modules/.bin:node_modules/hubot/node_modules/.bin:$PATH"
export HUBOT_HEROKU_KEEPALIVE_URL="https://wheeljack.herokuapp.com/"

exec node_modules/.bin/hubot --name "wheeljack" "$@"
