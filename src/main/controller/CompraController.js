'use strict';

const CompraModel = require("../model/Compra");
const Mongoose = require("mongoose");
const Compra = Mongoose.model("Compra");

class CompraController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Compra.find({}));
        } catch (error) {
            res.status(400).send("Erro ao buscar Compra");
        }
    }
    static async adicionar(req, res) {
        try {
            res.json(await Compra.create(req.body));
        } catch (error) {
            res.status(400).send("Erro ao adicionar Compra");
        }
    }


}
module.exports = CompraController;