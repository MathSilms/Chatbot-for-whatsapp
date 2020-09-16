const banco = require('./database/banco')
const stages = require('./stages')
const venonbt = require('venom-bot');

venonbt.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    client.sendText(
        message.from, 
        stages.step[getStage("5522998868691@c.us")].obj.execute()
      );
  });
}

function getStage(user){
  return banco.db[user].stage;
}
