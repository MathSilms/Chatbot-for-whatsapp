const banco = require('../database/banco');



function execute( user, msg ) {
    banco.db[user].stage = 0;
    return [
        'Seu pedido chegará em breve! \n'
        ,'Obrigado pela preferência, espero te ver novamente por aqui!'
    ]
}

exports.execute = execute;