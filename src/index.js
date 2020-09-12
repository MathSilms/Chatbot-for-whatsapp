// Supports ES6
// import { create, Whatsapp } from 'sulla';
//import { create, Whatsapp } from 'venom-bot';
const banco = require('./database/banco')
const stages = require('./stages')
const venonbt = require('venom-bot');

venonbt.create().then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    console.log(message)
    if (message.body === 'Hi') {
      client.sendText(message.from, 'Olá, seja bem vindo');
    }
  });
}

function getStage(user){
  return banco.db[user].stage;
}

console.log(stages.step[getStage("user2")].obj.execute());
console.log(stages.step[getStage("user1")].obj.execute());
 