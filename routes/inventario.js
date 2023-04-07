const {Router} = require('express')
const {createInventario, getInventario  } = require('../controllers/inventario')
const router = Router()

//Crear

router.post('/', createInventario)

//Consultar todos

router.get('/', getInventario)

module.exports = router