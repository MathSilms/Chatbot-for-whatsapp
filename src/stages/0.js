const options  = require('../options')
const banco = require('../database/banco')


function execute(user, msg, contato,SendMSG) {

  SendMSG(msg.from, "Deseja Olhar o nosso cardápio de bebidas?")
    let menu = " CARDAPIO \n\n";
  
    Object.keys(options.menu).forEach((value) => {
      //console.log(options.menu)
      let element = options.menu[value];
      console.log(element)
      menu += `${value} - ${element.description}        R$ ${element.price} \n`;
    });
  
    banco.db[user].stage = 1;
  
    return [
      `Olá ${contato} sou um assistente virtual, irei apresentar o carpádio, para fazer o pedido basta enviar o codigo do produto`,
      menu,
    ];
  }
  
exports.execute = execute;