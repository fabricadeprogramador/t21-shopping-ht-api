'use strict'
const ProdutoController = require("../controller/ProdutoController");

class ProdutoRoute{
    constructor (app){
        app.get("/produtos", ProdutoController.buscarTodos);
        app.get("/produtos/:id", ProdutoController.buscarPorId);
        app.post("/produtos", ProdutoController.adicionar);
        app.put("/produtos", ProdutoController.editar);
        app.delete("/produtos", ProdutoController.remover);
    }
}

module.exports = ProdutoRoute;