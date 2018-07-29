'use strict'
const Express = require("express")
const Mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Cors = require("cors")
const Config = require("../config.json");

const UsuarioRoute = require("./route/UsuarioRoute");
const EstabelecimentoRoute = require("./route/Estabelecimento");


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

        new UsuarioRoute(this.app);

        new EstabelecimentoRoute(this.app)

        this.app.listen(`${Config.apiPort}`, () => {
            console.log(`API rodando na porta ${Config.apiPort}`);            
        })

    }

}
new App().init();