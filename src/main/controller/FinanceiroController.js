'use strict';

const FinanceiroModel = require("../model/Financeiro");
const Mongoose = require("mongoose");
const Financeiro = Mongoose.model("Financeiro");

class FinanceiroController {

    static async buscarTodos(req, res) {

        try {

            res
                .json(await Financeiro.find({})
                    .populate("estabelecimento"));

        } catch (error) {

            res.status(400).send("Erro ao buscar");

        }
    } // buscarTodos()

    static async adicionar(req, res) {

        try {

            res.json(await Financeiro.create(req.body));

        } catch (error) {

            res.status(400).send("Erro ao adicionar ");

        }
    } // adicionar()

    static async editar(req, res) {

        try {

            res.json(await Financeiro.findByIdAndUpdate(req.body._id, req.body));

        } catch (error) {

            res.status(400).send("Erro ao atualizar");

        }
    } // editar()

    static async remover(req, res) {

        try {

            res.json(await Financeiro.findByIdAndRemove(req.body._id));

        } catch (error) {

            res.status(400).send("Erro ao remover");

        }
    } // remover()

} // class

module.exports = FinanceiroController;