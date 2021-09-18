/*Creamos un middleware para evitar el tener que poner el mismo código de 
comprobación de formularios en cada una de las peticiones. 
Ahora llmaremos a validar-campos como una función más
*/
const { response } = require('express');
const { validationResult } = require('express-validator');
const validarCampos = (req, res = response, next) => {
    const erroresVal = validationResult(req);
    if (!erroresVal.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores: erroresVal.mapped()
        });
    }
    next();
}

module.exports = { validarCampos }