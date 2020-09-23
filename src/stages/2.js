const banco = require('../database/banco')


function execute(user, message){
    
    if(message === '*'){
        banco.db[user].stage = 0;
        return ['Pedido Cancelado com sucesso'];
    }

    if(message === '#'){
        banco.db[user].stage = 3
        return ['Digite seu endereço para entrega']
    }

    let resume = ` Resumo do pedido \n`;
    let total = 0;
    banco.db[user].itens.forEach( ( value ) =>{
        total += value.price;
        resume += `${velue.description} - - - - - - - -  ${value.price} \n`
    });
    
    resume += ' - - - - - - - - - - - - - - - \n';
    resume += `Total R$ ${total}`;
    
    return [resume,' - - - - - - - - - ' ,`Seu total é : ${total}`]
}

exports.execute = execute;