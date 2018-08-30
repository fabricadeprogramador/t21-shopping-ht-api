'use strict'

const CompraController = require("../controller/CompraController");

class CompraRoute {
    constructor(app) {
        app.get("/compras", CompraController.buscarTodos);
        app.post("/compras", CompraController.adicionar);
        app.delete("/compras", CompraController.excluir);
    }
}

module.exports = CompraRoute;