'use strict'

const mongoose = require("mongoose");

class Estabelecimento extends mongoose.Schema {
    constructor(){
        super(
            {
                nome:{
                    type:String
                },
                endereco:{
                    type:String
                },
                telefone:{
                    type:Number
                }
            }
        )
        mongoose.model("Estabelecimento",this);
    }
}
new Estabelecimento();

module.exports = Estabelecimento;