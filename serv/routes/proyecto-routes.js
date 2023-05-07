import express from 'express';
import { consultarTodos, agregarPieza,crear,buscarPorFecha, consultaPorId } from '../controllers/proyecto-controller.js';

const rutas = express.Router();

rutas.get('/',consultarTodos);
rutas.put('/agregarPieza',agregarPieza);
rutas.post('/buscarId',consultaPorId)
rutas.post('/buscarPorFecha',buscarPorFecha);
rutas.post('/guardar',crear);
rutas.delete('/eliminar');

export default rutas;