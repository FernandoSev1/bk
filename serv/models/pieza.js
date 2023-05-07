import mongoose from "mongoose";

const piezaSquema = new mongoose.Schema({

    nombre:{
     type:String,
        require:true,
    },
    color:{
    type:String,
        require:true,
    },
    peso:{
     type:Number,
        require:true,
    },
    ciudad:{
     type:String,
        require:true,
    },
    cantidad:{
     type:String,
        require:true,
    }
})

const Pieza =  mongoose.model('Pieza',piezaSquema);
export default Pieza;