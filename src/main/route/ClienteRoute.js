'use strict'
const ClienteController = require("../controller/ClienteController");

class ClienteRoute{
    constructor (app){
        app.get("/cliente", ClienteController.buscarTodos);
        app.get("/cliente/:cpfCnpj", ClienteController.buscarPorCpfCnpj);
        app.post("/cliente", ClienteController.adicionar);
        app.put("/cliente", ClienteController.editar);
        app.delete("/cliente", ClienteController.remover);
    }
}

module.exports = ClienteRoute;