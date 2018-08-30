'use strict';

const Mongoose = require('mongoose');

module.exports = new class Financeiro extends Mongoose.Schema {

    constructor() {

        super({

            despesa: {
                type: Number
            }

        });

        Mongoose.model('Financeiro', this);
    } // contructor

} // class