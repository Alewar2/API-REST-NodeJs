const {Router} = require('express')
const {createEstadoEquipo, getEstadoEquipos} = require('../controllers/estadoEquipo')
const router = Router()

//Crear

router.post('/', createEstadoEquipo)

//Consultar todos

router.get('/', getEstadoEquipos)

module.exports = router