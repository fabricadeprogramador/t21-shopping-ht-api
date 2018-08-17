'use strict'
const FinanceiroController = require("../controller/FinanceiroController");

class FinanceiroRoute {
    constructor(app) {
        app.get("/financeiro", FinanceiroController.buscarTodos);
        app.post("/financeiro", FinanceiroController.adicionar);
        app.put("/financeiro", FinanceiroController.editar);
        app.delete("/financeiro", FinanceiroController.remover);
    }
}

module.exports = FinanceiroRoute;