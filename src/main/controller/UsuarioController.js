'use strict';

const UsuarioModel = require("../model/Usuario");
const Mongoose = require("mongoose");
const Usuario = Mongoose.model("Usuario");

class UsuarioController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Usuario.find({}));
        } catch (error) {
            res.status(400).send("Erro ao buscar usuários!");
        }
    }

    static async autenticar(req, res) {
        try {
            console.log(req.body);
            res.json(await Usuario.findOne(req.body))
        } catch (error) {
            res.status(400).send("Erro ao buscar usuários!");
        }
    }

    static async adicionar(req, res) {
        try {
            res.json(await Usuario.create(req.body));
        } catch (error) {
            res.status(400).send("Erro ao adicionar usuário! ");
        }
    }
    static async editar(req, res) {
        try {
            res.json(await Usuario.findByIdAndUpdate(req.body._id, req.body));
        } catch (error) {
            res.status(400).send("Erro ao atualizar usuário");
        }
    }
    static async remover(req, res) {
        try {
            res.json(await Usuario.findByIdAndRemove(req.body._id));
        } catch (error) {
            res.status(400).send("Erro ao remover usuário");
        }
    }


}
module.exports = UsuarioController;