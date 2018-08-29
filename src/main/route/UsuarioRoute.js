'use strict'
const UsuarioController = require("../controller/UsuarioController");

class UsuarioRoute{
    constructor (app){
        app.get("/usuarios", UsuarioController.buscarTodos);
        app.post("/usuarios", UsuarioController.adicionar);
        app.put("/usuarios", UsuarioController.editar);
        app.delete("/usuarios", UsuarioController.remover);
        app.post("/autenticar",UsuarioController.autenticar);
    }
}

module.exports = UsuarioRoute;