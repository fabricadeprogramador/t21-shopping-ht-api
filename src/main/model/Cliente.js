'use strict';

const Mongoose = require('mongoose');

class Cliente extends Mongoose.Schema {

    constructor() {

        super({

            nome: {
                type: String
            },

            sobrenome: {
                type: String
            },
            cpfCnpj: {
                type: String
            },
            pf: {
                type: Boolean
            },
            endereco: {
                type: String
            },
            telefone: {
                type: String
            },
            email: {
                type: String
            },
            foto: {
                type: String
            },
            dataNasc: {
                type: Date
            },

        });

        Mongoose.model('Cliente', this);
    } // constructor

} // class

new Cliente();

module.exports = Cliente;