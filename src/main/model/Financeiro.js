'use strict';

const Mongoose = require('mongoose');

module.exports = new class Financeiro extends Mongoose.Schema {

    constructor() {

        super({
            valor: {
                type: Number,
                min: 0
            },

            dataDeCriacao: {
                type: Date,
                default: new Date().getDate()
            },

            compra: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Compra'
            }

        });

        Mongoose.model('Financeiro', this);
    } // contructor

} // class