const menu  = require('../menu')

function execute(){

    let List = " Cardápio \n\n";


    Object.keys(menu.menu).forEach(value =>{
        let element = menu.menu[value]
        List += `${element} - ${element.description}    R$ ${element.prince} \n`;
    });

    return ['Olá, seja bem vindo. Sou seu assistente virtual!', menu[{Object}] ]
}

exports.execute = execute;