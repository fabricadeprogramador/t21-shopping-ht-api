'use strict'
const Express = require("express")
const Mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Cors = require("cors")
const Config = require("../config.json");

const UsuarioRoute = require("./route/UsuarioRoute");
const EstabelecimentoRoute = require("./route/Estabelecimento");
const ProdutoRoute = require("./route/ProdutoRoute");
const ClienteRoute = require("./route/ClienteRoute");
const CompraRoute = require("./route/CompraRoute");
class App {

    constructor() {

        this.app;

    }
    init() {

        this.app = Express();
        this.app.use(bodyParser.json());
        this.app.use(Cors());

        Mongoose.connect(`mongodb://${Config.development.db.user}:${Config.development.db.password}@${Config.development.db.url}/${Config.development.db.name}`, {
            useNewUrlParser: true
        });

        // Instanciando as rotas
        new UsuarioRoute(this.app);
        new EstabelecimentoRoute(this.app)
        new ProdutoRoute(this.app);
        new ClienteRoute(this.app);
        new CompraRoute(this.app);

        this.app.listen(`${Config.apiPort}`, () => {
            console.log(`API rodando na porta ${Config.apiPort}`);            
        })

    }

}
new App().init();