import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/database.js';
import proyectoRutas from './routes/proyecto-routes.js';
import piezaRutas from './routes/pieza-routes.js'


const app = express();

dotenv.config();

app.use(express.json());

connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`Servidor port ${process.env.PORT}`);
})

