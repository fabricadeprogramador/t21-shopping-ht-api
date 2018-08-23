'use strict';

const ProdutoModel = require("../model/Produto");
const Mongoose = require("mongoose");
const Produto = Mongoose.model("Produto");

class ProdutoController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Produto.find({}));
        } catch (error) {
            res.status(400).send("Erro ao buscar Produto");
        }
    }

    static async buscarPorId(req, res) {
        try {
            res.json(await Produto.findById(req.params.id));
        } catch (error) {
            res.status(400).send("Erro ao buscar Produto");
        }
    }

    static async adicionar(req, res) {
        try {
            res.json(await Produto.create(req.body));
        } catch (error) {
            res.status(400).send("Erro ao adicionar Produto! ");
        }
    }
    static async editar(req, res) {
        try {
            
            console.log("Editando id: " + req.body._id);
            res.json(await Produto.findByIdAndUpdate(req.body._id, req.body));
        } catch (error) {
            res.status(400).send("Erro ao atualizar Produto");
        }
    }
    static async remover(req, res) {
        try {
            console.log("Removendo id: " + req.body._id);
            res.json(await Produto.findByIdAndRemove(req.body._id));
        } catch (error) {
            res.status(400).send("Erro ao remover Produto");
        }
    }


}
module.exports = ProdutoController;