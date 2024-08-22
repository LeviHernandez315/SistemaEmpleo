var express = require('express');
var router = express.Router();
var aspiranteController = require('../controllers/aspirante.controller')

router.post('/persona', aspiranteController.registrarPersona);
router.post('/usuario', aspiranteController.registrarUsuario);
router.post('/aspirante', aspiranteController.registrarAspirante);

// router.get('/', usuarioController.obtenerUsuarios);
// router.post('/', usuarioController.insertarPersona);
// router.post('/usuarios', usuarioController.insertarUsuario);

module.exports = router;