const banco = require('./database/banco')
const stages = require('./stages')
const venonbt = require('venom-bot');

venonbt.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    client.sendText(message.from, stages[getStage(message.from)].obj.execute());
  });
}

function getStage(user){
  return banco.db[user].stage;
}
