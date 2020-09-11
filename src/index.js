// Supports ES6
// import { create, Whatsapp } from 'sulla';
import { create, Whatsapp } from 'venom-bot';
import { stages } from './changes/index';


const database = {
  user1:{
    stage:stages[0]
  },
  user2:{
    stage:stages[1]
  }
}



create().then((client) => start(client));

function getStage(user){
  return database[user].stage;
}


function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi') {
      client.sendText(message.from, 'Welcome Venom 🕷');
    }
  });
}