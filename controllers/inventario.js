const Inventario = require('../models/inventario')
const {request, response} = require('express')
const Usuario = require('../models/usuario')
const Marca = require('../models/marcas')
const EstadoEquipo = require('../models/estadoEquipo')
const TipoEquipo = require('../models/tipoEquipo')




//crear
const createInventario = async (req = request, res = response) => 
{
    try{
        const data = req.body
        console.log(data)

        //Validando Usuario
         const { usuario, marcas, estadoEquipo, tipoEquipo }= data;
         const usuarioDB = Usuario.findOne({
             _id: usuario._id,
              estado: true
        })// select * from usuario where _id=? adn estado=true
        if(!usuarioDB){
             return res.status(400).json({msg: 'usuario no valido'})
        }
  
        //Validando Marca
        const marcaDB = Marca.findOne({
            _id: marcas._id,
            estado: true
        })// select * from marcas where _id=? and estado=true
        if(!marcaDB){
            return res.status(400).json({msg: 'Marca no valido'})
        }

        //Validando estadoEquipo 
        const estadoEquipoDB = EstadoEquipo.findOne({
            _id: estadoEquipo._id,
            estado: true
        })// select * from estadoEquipo where _id=? and estado=true
        if(!estadoEquipoDB){
            return res.status(400).json({msg: 'Estado del equipo no valido'})
        }

        //Validando tipoEquipo 
        const tipoEquipoDB = TipoEquipo.findOne({
            _id: tipoEquipo._id,
            estado: true
        })// select * from tipoEquipo where _id=? and estado=true
        if(!tipoEquipoDB){
            return res.status(400).json({msg: 'Tipo de equipo no valido'})
        }

        const inventario = new Inventario(data)
        console.log(inventario)
        await inventario.save()

        return res.status(201).json(inventario)
    }catch(e){
        return res.status(500).json({
            msg:'mal general' + e
        })
    }
    
}

//Listar todos
const getInventario = async (req = request, res = response) => {

    try{
       const inventarioDB = await Inventario.find()//select * from inventario
       return res.json(inventarioDB)

    }catch(e){
        return res.status(500).json({
            msg:'Error general' + e
        })
    }

    
}


module.exports = {createInventario, getInventario}

