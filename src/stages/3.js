const banco = require('../database/banco')
const stages = require('../stages')

function execute(user, msg){

    if(message === '*'){
        banco.db[user].stage = 0;
        
        return ['Pedido Cancelado com sucesso'];
    }

    if(message === '#'){
        banco.db[user].stage = 4
        
        return stages.step[4].obj.execute(user,  '')
    }


    return [`Comfirme o endereço de entrega : \n ${msg}`,
    "```Digite # para continuar ou * para cancelar```",
]
}

exports.execute = execute;