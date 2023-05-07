import mongoose from "mongoose";

const proyectoSquema = new mongoose.Schema({

    nombre:{
    type:String,
        require:true,
    },
    ciudad:{
    type:String,
        require:true,
    },
    presupuesto:{
    type:Number,
        require:true,
    },
    fInicio:{
    type:Date,
        require:true
    },
    pResponsable:{
    type:String,
        require:true,
    },
    pieza:[{
        idPieza : {
            type:mongoose.SchemaTypes.ObjectId,
            require:false,
            ref:'Pieza'
        },
        cantidad:{
        type:Number,
            require:true,
        }                
    }]
})

const Proyecto =  mongoose.model('Proyecto',proyectoSquema);
export default Proyecto;