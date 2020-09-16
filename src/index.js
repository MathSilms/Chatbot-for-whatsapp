const banco = require('./database/banco')
const stages = require('./stages')
const venonbt = require('venom-bot');

venonbt.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage("5522998868691@c.us")].obj.execute()
    for (let index = 0; index < array(resp).length; index++) {
      const element = array(resp)[index];
      client.sendText(message.from,element)
    }
  });
}

function getStage(user){
  return banco.db[user].stage;
}
