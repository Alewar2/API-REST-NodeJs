const {Router} = require('express')
const {createTipoEquipo, getTipoEquipos} = require('../controllers/tipoEquipo')
const router = Router()

//Crear

router.post('/', createTipoEquipo)

//Consultar todos

router.get('/', getTipoEquipos)

module.exports = router