import Ciudad from "../models/ciudad.js";
import Pieza from "../models/pieza.js"
import Proyecto from "../models/proyecto.js";

const crear = async (req, res) => {

    const pieza = new Pieza(req.body);

    try {
        await pieza.save()
    } catch (error) {
        console.log(error);
    }

    return res.status(200).json({
        ok: true,
        msg: "Pieza guardada"
    })
}

const consultarTodos = async (req, res) => {

    const piezas = await Pieza.find();

    return res.status(200).json({
        ok: true,
        piezas
    })
}

const actualizarCantidad = async (req, res) => {


    const proyecto = await Proyecto.findById(req.body._id);

    const indicePieza = proyecto.pieza.findIndex(
        pieza =>
            pieza._id == req.body.pieza);
    console.log(proyecto)

    if (indicePieza !== -1) {
        proyecto.pieza[indicePieza].cantidad = req.body.cantidad;
        await proyecto.save()
        return res.status(200).json({
            ok: true,
            msg: 'Cantidad actualizada'
        })
    }
    return res.status(400).json({
        ok: false,
        msg: 'Error'
    })


}

const consultarPorId = async(req,res) =>{
    const pieza = await Pieza.findById(req.body.idPieza)
    res.status(200).json({
        pieza
    })
}

const eliminar = async () => {

}

const consultarCiudad = async (req,res) =>{

    const ciudades = await Ciudad.find();

    res.json({
        ok:true,
        ciudades
    })

}

export {
    crear, actualizarCantidad, eliminar, consultarTodos, consultarCiudad, consultarPorId
}