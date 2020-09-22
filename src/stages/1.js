const options = require('../options');
const banco = require('../database/banco')

function execute(user, message ){

    if(!options.menu[message]){
        return ['Código inválido, digite o número correto. ','``` Digite # para finalizar ou * para cancelar```']
    }

    banco.db[user].itens.push(options.menu[message]);


    return [`item ${options.menu[message].description} adicionado com sucesso`, '``` Digite # para finalizar ou * para cancelar```' ]
}

exports.execute = execute;