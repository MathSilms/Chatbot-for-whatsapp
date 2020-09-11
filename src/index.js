// Supports ES6
// import { create, Whatsapp } from 'sulla';
//import { create, Whatsapp } from 'venom-bot';




const stages = {
  0:{
    description: 'boas vindas',
    obj:require("./stages/0")
  },
  1:{
    description: 'vendas',
    obj:require("./stages/1")
  },
  2:{
    description: 'resumo',
    obj:require("./stages/1")
  },
  3:{
    description: 'endereço',
    obj:require("./stages/1")
  },
  4:{
    description: 'encerramento',
    obj:require("./stages/1")
  }
}

// create().then((client) => start(client));

function getStage(user){
  return database[user].stage;
}

console.log(stages[getStage('user1')].obj.execute());
console.log(stages[getStage('user2')].obj.execute());
// function start(client) {
//   client.onMessage((message) => {
//     if (message.body === 'Hi') {
//       client.sendText(message.from, 'Welcome Venom 🕷');
//     }
//   });
// }