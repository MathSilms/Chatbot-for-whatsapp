const options  = require('../options')

function execute(){

    let menu = " Cardápio \n\n";    

    Object.keys(options.menu).forEach((value) =>{
        let element = options.menu[value];
        console.log(element)
        menu += `${element} - ${element.description}    R$ ${element.prince} \n`;
    });

    return ['Olá, seja bem vindo. Sou seu assistente virtual!', menu ]
}

exports.execute = execute;