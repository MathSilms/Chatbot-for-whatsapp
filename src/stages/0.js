const options  = require('../options')
const banco = require('../database/banco')

function execute(user,msg){

    let menu = " Cardápio \n\n";    

    Object.keys(options.menu).forEach((value) =>{
        let element = options.menu[value];
        menu += `${value} - ${element.description}    R$ ${element.price} \n`;
    });

    banco.db[user].stage = 1;

    return ['Olá, seja bem vindo. Sou seu assistente virtual! \n\n\n irei te apresentar o cardápio para fazer o pedido', menu ]
}

exports.execute = execute;