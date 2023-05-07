import mongoose from "mongoose";

const conectarBaseDatos = async() => {
    try {
     await mongoose.connect(process.env.BD);
    console.log('CONEXION a la base de datos exitosa')
    } catch (error) {
      console.log(error);        
    }
}

export default conectarBaseDatos;