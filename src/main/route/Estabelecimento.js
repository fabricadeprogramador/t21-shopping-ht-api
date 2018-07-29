'use strict'
const EstabelecimentoController = require("../controller/EstabelecimentoController");

class EstabelecimentoRoute{
    constructor(app){
        app.get("/estabelecimento",EstabelecimentoController.buscarTodos);
        app.post("/estabelecimento",EstabelecimentoController.adicionar);
        app.put("/estabelecimento",EstabelecimentoController.editar);
        app.delete("/estabelecimento",EstabelecimentoController.remover);
    }
}

module.exports = EstabelecimentoRoute;