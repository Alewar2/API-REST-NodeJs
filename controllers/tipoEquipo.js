const tipoEquipo = require('../models/tipoEquipo')
const TipoEquipo = require('../models/tipoEquipo')
const {request, response} = require('express')
//crear
const createTipoEquipo = async (req = request, res = response) => 
{
    try{
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase()
        : ''
       const tipoEquipoDB = await TipoEquipo.findOne({nombre: nombre})//select * from TipoEquipo = where nombre =?
       if (tipoEquipoDB){
           return res.status(400).json({msg: 'ya existe'})
       }
       const data ={
        nombre
       }
       const tipoEquipo = new TipoEquipo(data)
       console.log(tipoEquipo)
       await tipoEquipo.save()
       return res.status(201).json(tipoEquipo)

    }catch(e){
        return res.status(500).json({
            msg:'Error general' + e
        })
    }
   
}

//Listar todos
const getTipoEquipos = async (req = request, res = response) => {

    try{
        const { estado } = req.query

        const nombre = req.body.nombre ? req.body.nombre.toUpperCase()
        : ''
       const tipoEquiposDB = await TipoEquipo.find({estado: estado})//select * from TipoEquipo = where estado =?
       return res.json(tipoEquiposDB)

    }catch(e){
        return res.status(500).json({
            msg:'Error general' + e
        })
    }

    
}


module.exports = {createTipoEquipo, getTipoEquipos}