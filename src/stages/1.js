const options = require("../options");
const banco = require("../database/banco");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 0;
    return ["Pedido cancelado com sucesso"];
  }

  if (msg === "#") {
    banco.db[user].stage = 2;
    return ["Posso fechar seu pedido?"];
  }

  if (!options.menu[msg]) {
    return [
      "Código inválido, digite corretamente",
      "```Digite # para finalizar o pedido ou * para cancelar```",
    ];
  }

  banco.db[user].itens.push(options.menu[msg]);

  return [
    `Item(${options.menu[msg].descricao}) adiconado com sucesso`,
    "```Digite o codigo do próximo produto ou # para finalizar. Caso queira cancelar, digite *```",
  ];
}

exports.execute = execute;