const options = require("../options");
const banco = require("../database/banco");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 0;
    return ["Pedido cancelado com sucesso"];
  }

  if (msg === "#") {
    banco.db[user].stage = 2;
    return ["Estamos fechando seu pedido, ok?"];
  }

  if (!options.menu[msg]) {
    return [
      "Código inválido, digite corretamente",
      "```Digite # para finalizar ou * para cancelar```",
    ];
  }

  banco.db[user].itens.push(options.menu[msg]);

  return [
    `Item(${options.menu[msg].descricao}) adiconado com sucesso`,
    "```Digite # para finalizar ou * para cancelar```",
  ];
}

exports.execute = execute;