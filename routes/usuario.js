const {Router} = require('express')
const {createUsuario, getUsuario} = require('../controllers/usuario')
const router = Router()

//Crear

router.post('/', createUsuario)

//Consultar todos

router.get('/', getUsuario)

module.exports = router