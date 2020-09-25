const banco = require('./database/banco')
const stages = require('./stages')
const venonbt = require('venom-bot');

 venonbt.create().then((client) => start(client));
 function start(client) {
   try{
    client.onMessage((message) => {
      console.log(message.sender)
       let resp = stages.step[getStage(message.from)].obj.execute(message.from, message.body)
       for (let index = 0; index < resp.length; index++) {
         const element = resp[index];
         client.sendText(message.from,element)
      }
     });
   } catch(err){
     console.log(err)
   }
 }

function getStage(user){
  return banco.db[user].stage;
}
