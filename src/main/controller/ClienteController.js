'use strict';

const ClienteModel = require("../model/Cliente");
const UsuarioModel = require("../model/Usuario");
const Mongoose = require("mongoose");
const Cliente = Mongoose.model("Cliente");
const Usuario = Mongoose.model("Usuario");


class ClienteController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Cliente.find({}));
        } catch (error) {
            res.status(400).send("Erro ao buscar Cliente");
        }
    }

    static async buscarPorCpfCnpj(req, res) {
        try {
            res.json(await Cliente.findOne({
                cpfCnpj: req.params.cpfCnpj
            }))
        } catch (error) {
            res.status(400).send("Erro ao buscar Cliente");
        }
    }

    static async adicionar(req, res) {
        try {
            await Usuario.create({
                email: req.body.email,
                senha: req.body.senha
            })
            res.json(await Cliente.create(req.body));
        } catch (error) {
            res.status(400).send("Erro ao adicionar Cliente ");
        }
    }
    static async editar(req, res) {
        try {
            res.json(await Cliente.findByIdAndUpdate(req.body._id, req.body));
        } catch (error) {
            res.status(400).send("Erro ao atualizar Cliente");
        }
    }
    static async remover(req, res) {
        try {
            res.json(await Cliente.findByIdAndRemove(req.body._id));
        } catch (error) {
            res.status(400).send("Erro ao remover Cliente");
        }
    }


}
module.exports = ClienteController;