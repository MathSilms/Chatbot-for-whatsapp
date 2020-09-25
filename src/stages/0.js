const options  = require('../options')
const banco = require('../database/banco')


function execute(user, msg, contato) {
    let menu = " CARDAPIO \n\n";
  
    Object.keys(options.menu).forEach((value) => {
      let element = options.menu[value];
      menu += `${value} - ${element.descricao}        R$ ${element.preco} \n`;
    });
  
    banco.db[user].stage = 1;
  
    return [
      `Olá ${contato} sou umassistente virtual, irei apresentar o carpádio, para fazer o pedido basta enviar o codigo do produto`,
      menu,
    ];
  }
  
exports.execute = execute;