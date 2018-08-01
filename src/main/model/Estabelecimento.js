'use strict'

const mongoose = require("mongoose");
const Produto = mongoose.model("Produto");
class Estabelecimento extends mongoose.Schema {
    constructor() {
        super({
            nome: {
                type: String
            },
            cnpj: {
                type: String
            },
            cidade: {
                type: String
            },
            estado: {
                type: String
            },
            endereco: {
                type: String
            },
            telefone: {
                type: Number
            },
            ramo: {
                type: String
            },
           // produtos: [
        //         Produto
         //   ]
        })
        mongoose.model("Estabelecimento", this);
    }
}
new Estabelecimento();

module.exports = Estabelecimento;