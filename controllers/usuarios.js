const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');
const { response } = require('express');
const { bcryptjs } = require('bcryptjs');

const obtenerUsuarios = async(req, res) => {

    const usuarios = await Usuario.find({});

    res.json({
        ok: true,
        msg: 'obtenerUsuarios',
        usuarios //Cuando quieres mostrar algo y se declaran igual. Equivale a usuarios:usuarios
    });
}

const crearUsuario = async(req, res = response) => {

    /*
    Lo de abajo es lo mismo que hacer esto:
    const email = req.body.email;
    const password = req.body.password;
    Se llama desestructuración
    */
    const { email, password } = req.body;

    try {
        //Busqueda de un usuario con el mismo email, para saber si ya está registrado
        const existeEmail = await Usuario.findOne({ email: email });

        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El email ya existe',
            });
        }

        //const salt = bcryptjs.genSaltSync(); // generamos un salt, una cadena aleatoria
        //const cpassword = bcryptjs.hashSync(password, salt);

        res.json({
            ok: true,
            msg: 'crearUsuario',
            pass: password,
            //cpass: cpassword
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            msg: 'El email ya existe2',
        });
    }

}

const actualizarUsuario = async(req, res) => {
    res.json({
        ok: true,
        msg: 'actualizarUsuario'
    });
}

const borrarUsuario = async(req, res) => {
    res.json({
        ok: true,
        msg: 'borrarUsuario'
    });
}

module.exports = { obtenerUsuarios, crearUsuario, actualizarUsuario, borrarUsuario }