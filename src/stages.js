const stages = {
    0:{
      description: 'boas vindas',
      obj:require("./stages/0")
    },
    1:{
      description: 'vendas',
      obj:require("./stages/1")
    },
    2:{
      description: 'resumo',
      obj:require("./stages/2")
    },
    3:{
      description: 'endereço',
      obj:require("./stages/3")
    },
    4:{
      description: 'encerramento',
      obj:require("./stages/4")
    }
  }

exports.step = stages;