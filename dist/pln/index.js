"use strict";

var WIT_AI_TOKEN = "";

var _require = require('node-wit'),
    Wit = _require.Wit;

var plnParser = new Wit({
    accessToken: WIT_AI_TOKEN
});

module.exports = plnParser;