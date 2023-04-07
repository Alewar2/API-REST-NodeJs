const estadoEquipo = require('../models/estadoEquipo')
const EstadoEquipo = require('../models/estadoEquipo')
const {request, response} = require('express')
//crear
const createEstadoEquipo = async (req = request, res = response) => 
{
    try{
        const nombre = req.body.nombre ? req.body.nombre.toUpperCase()
        : ''
       const estadoEquipoDB = await EstadoEquipo.findOne({nombre: nombre})//select * from TipoEquipo = where nombre =?
       if (estadoEquipoDB){
           return res.status(400).json({msg: 'ya existe'})
       }
       const data ={
        nombre
       }
       const estadoEquipo= new EstadoEquipo(data)
       console.log(estadoEquipo)
       await estadoEquipo.save()
       return res.status(201).json(estadoEquipo)

    }catch(e){
        return res.status(500).json({
            msg:'Error general' + e
        })
    }
   
}

//Listar todos
const getEstadoEquipos = async (req = request, res = response) => {

    try{
        const { estado } = req.query

        const nombre = req.body.nombre ? req.body.nombre.toUpperCase()
        : ''
       const estadoEquipoDB = await EstadoEquipo.find({estado: estado})//select * from TipoEquipo = where estado =?
       return res.json(estadoEquipoDB)

    }catch(e){
        return res.status(500).json({
            msg:'Error general' + e
        })
    }

    
}


module.exports = {createEstadoEquipo, getEstadoEquipos}