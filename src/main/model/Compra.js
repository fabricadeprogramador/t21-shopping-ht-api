'use strict'

const Mongoose = require("mongoose");

class Compra extends Mongoose.Schema {

    constructor() {

        super({
            cliente: { //nome e cpf do cliente
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Cliente'
            },

            valor: {
                type: Number
            },

            data: {
                type: Date,
                default: new Date()
            },

            estabelecimento: { //nome do estabelecimento
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Estabelecimento'
            }

        })

        Mongoose.model("Compra", this);
    }
}
new Compra();

module.exports = Compra;