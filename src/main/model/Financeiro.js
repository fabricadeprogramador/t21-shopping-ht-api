'use strict';

const Mongoose = require('mongoose');

class Financeiro extends Mongoose.Schema {

    constructor() {

        super({

            tipo: {
                type: String,
                enum: ["Despesa", "Receita"],
                default: "Despesa",
                required: true,

            },

            valor: {
                type: Number,
                min: 0,
                required: true
            },

            dataDeCriacao: {
                type: Date,
                default: new Date().getDate(),
                required: true
            },

            estabelecimento: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Estabelecimento'
            }

        });

        Mongoose.model('Financeiro', this);
    } // contructor

} // class

new Financeiro();

module.exports = Financeiro;