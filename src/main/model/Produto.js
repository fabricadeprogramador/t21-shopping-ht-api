'use strict';

const Mongoose = require('mongoose');

class Produto extends Mongoose.Schema {

    constructor() {

        super({

            foto: {
                type: String
            },

            descricao: {
                type: String
            },

            preco: {
                type: String
            }

        });

        Mongoose.model('Produto', this);
    } // contructor

} // class

new Produto();

module.exports = Produto;