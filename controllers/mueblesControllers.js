import Muebles from "../models/muebles.js";

export const getAllMuebles = async (req, res) => {
    try {
        const muebles = await Muebles.findAll();
        res.json(muebles);
    } catch (error) {
        res.json({msg: error.message})
    }
}

export const getMueble = async (req, res) => {
    try {
        const mueble = await Muebles.findAll({
            where:{id:req.params.id}
        });
        res.json(mueble[0]);
    } catch (error) {
        res.json({msg: error.message})
    }
}

export const agregarMuebles = async (req, res) => {
    try {
        await Muebles.create(req.body);
        res.json({msg: "Se agregó un mueble fabricado"})
    } catch (error) {
        res.json({msg: "Error de agregar el mueble fabricado"})
    }
}

export const modificarMueble = async (req, res) => {
    try {
        await Muebles.update(req.body,{
            where:{id: req.params.id}
        });
        res.json({msg: "Se modificó el mueble del inventario"});
    } catch (error) {
        res.json({msg: "Error de modificar el mueble del inventario"})
    }
}

export const eliminarMueble = async (req, res) => {
    try{
        await Muebles.destroy({
            where:{id: req.params.id}
        })
        res.json({msg: "Se eliminó el mueble del inventario"})
    } catch (error){
        res.json({msg: "Error de eliminar el mueble del inventario"})
    }
}