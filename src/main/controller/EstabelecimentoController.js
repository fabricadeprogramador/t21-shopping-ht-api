'use strict'
const Produto = require("../model/Produto")
const EstabelecimentoModel = require("../model/Estabelecimento");
const mongoose = require("mongoose");
const Estabelecimento = mongoose.model("Estabelecimento");

class EstabelecimentoController {
    static async buscarTodos(req, res) {
        try {
            res.json(await Estabelecimento.find({})
                .populate('produtos', 'nome valor')
                .exec())
        } catch (error) {
            res.status(400).send("Erro ao buscar estabelecimento");
        }
    }

    static async adicionar(req, res) {
        try {
            res.json(await Estabelecimento.create(req.body));
        } catch (error) {
            res.status(400).send("Erro ao adicionar estabelecimento");
        }
    }
    static async editar(req, res) {
        try {
            res.json(await Estabelecimento.findByIdAndUpdate(req.body._id, req.body));
        } catch (error) {
            res.status(400).send("Erro ao editar estabelecimento");
        }
    }
    static async remover(req, res) {
        try {
            res.json(await Estabelecimento.findByIdAndRemove(req.body._id, req.body));
        } catch (error) {

        }
    }

}
module.exports = EstabelecimentoController;