'use strict'

const mongoose = require("mongoose");

class Compra extends mongoose.Schema {

    constructor() {

        super({
            cliente: { //nome e cpf do cliente
                type: String
            },
            valor: {
                type: String
            },
            data: {
                type: Date
            },
            estabelecimento: { //nome do estabelecimento
                type: String
            },

        })
        mongoose.model("Compra", this);
    }
}
new Compra();

module.exports = Compra;