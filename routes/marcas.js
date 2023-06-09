const {Router} = require('express')
const {createMarcas, getMarcas, updateMarcasByID} = require('../controllers/marcas')
const router = Router()

//Crear

router.post('/', createMarcas)

//Consultar todos

router.get('/', getMarcas, updateMarcasByID)

module.exports = router