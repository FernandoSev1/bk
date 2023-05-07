import mongoose from "mongoose";

const ciuSquema = new mongoose.Schema({

 nombre:{
    type:String,
    require:true,
    }
})
const Ciudad =  mongoose.model('Ciudad',ciuSquema);
export default Ciudad;