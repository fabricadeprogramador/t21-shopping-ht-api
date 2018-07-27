'use strict';

const Mongoose = require('mongoose');

class Usuario extends Mongoose.Schema {

    constructor() {

        super({

            email: {
                type: String
            },

            senha: {
                type: String
            }

        });

        Mongoose.model('Usuario', this);
    } // contructor

} // class

new Usuario();

module.exports = Usuario;