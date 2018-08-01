'use strict';

const Mongoose = require('mongoose');

class Produto extends Mongoose.Schema {

    constructor() {

        super({

            nome: {
                type: String
            },

            foto: {
                type: String
            },

            descricao: {
                type: String
            },

            valor: {
                type: Number
            }

        });

        Mongoose.model('Produto', this);
    } // contructor

} // class

new Produto();

module.exports = Produto;