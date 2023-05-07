 import Pieza from '../models/pieza.js';
import Proyecto from '../models/proyecto.js'

const crear = async(req,res) => {

    const proyecto = new Proyecto(req.body);

    try {
        await proyecto.save(); 
    } catch (error) {
        console.log(error);
    }
    return res.status(200).json({
        ok:true,
        msg:"Proyecto guardado"
    })
    
}

const consultaPorId = async (req,res) =>{

    console.log(req.body)    
    const proyecto = await Proyecto.findById(req.body.id).populate
    ('pieza.idPieza','nombre color peso ciudad cantidad')
    

    res.status(200).json({
        proyecto
    })

}

const consultarTodos = async(req,res) =>{
    
    const proyectos = await Proyecto.find().populate
    ('pieza.idPieza','nombre color peso ciudad cantidad');

    return res.status(200).json({
        ok:true,
        proyectos
    })
}

const agregarPieza = async(req,res) => {

    let proyecto;
    try {
        proyecto = await Proyecto.findById(req.body._id);
    } catch (error) {
        console.log(error)
    }

    if(!proyecto){
        return res.status(404).json({
            ok:false,
            msg:"No existe ese proyecto"
        })
    }

    const piezaExistente = proyecto.pieza.find
    (pieza => pieza.idPieza == req.body.pieza);
    console.log(piezaExistente)

    if(piezaExistente){
        console.log("entre")
        return res.json({
            ok:false,
            msg:"Pieza ya existente"
        })
    }

    let pieza;

    try {
        pieza = await Pieza.findById(req.body.pieza);        
    } catch (error) {
        console.log(error)
    }




    const piezaModificado = {
        idPieza: req.body.pieza,
        cantidad:pieza.cantidad
        
    }

    proyecto.pieza.push(piezaModificado)

    try {
        await proyecto.save();
    } catch (error) {
        console.log(error)
    }

    return res.status(200).json({
        ok:true,
        msg:'Se agregó la pieza en el proyecto'
    })



}

const buscarPorFecha = async(req,res)=> {

    req.body.fechaInicio;
    req.body.fechaFin;

    const proyectos = await Proyecto.find().populate('pieza.idPieza','nombre color peso ciudad cantidad');


    const fechaInicio = new Date(     req.body.fechaInicio       );
    const fechaFin = new Date(     req.body.fechaFin       );


    let proyecto = [];
    proyectos.forEach(data => {
        const fecha = new Date(data.fechaInicio)
        if(fecha >= fechaInicio && fecha <=  fechaFin ){
            proyecto.push(data);
        }
    });

return res.status(200).json({
        ok:true,
        // msg:'Se agregó la pieza en el proyecto',
        proyecto
    })
}

const eliminar = async() => {

}

export {
    crear,
    consultarTodos,
    agregarPieza,
    eliminar,
    buscarPorFecha,
    consultaPorId
}
