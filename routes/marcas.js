const {Router} = require('express')
const {createMarcas, getMarcas} = require('../controllers/marcas')
const router = Router()

//Crear

router.post('/', createMarcas)

//Consultar todos

router.get('/', getMarcas)

module.exports = router