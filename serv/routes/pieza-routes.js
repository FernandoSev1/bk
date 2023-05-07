import express from 'express';
import { consultarTodos, crear,actualizarCantidad ,consultarCiudad,consultarPorId} from '../controllers/pieza-controller.js';


const rutas = express.Router();

rutas.get('/',consultarTodos);
rutas.put('/actualizarCantidad',actualizarCantidad)
rutas.post('/crear',crear);
rutas.post('/consultarPorId',consultarPorId)

rutas.get('/consultarCiudad', consultarCiudad);
// rutas.delete();
// rutas.put();

export default rutas;

