var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuario.controller')

router.post('/', usuarioController.obtenerUsuarios);

// router.get('/', usuarioController.obtenerUsuarios);
// router.post('/', usuarioController.insertarPersona);
// router.post('/usuarios', usuarioController.insertarUsuario);

module.exports = router;