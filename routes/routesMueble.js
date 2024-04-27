import express from 'express';
import {getAllMuebles, getMueble, agregarMuebles, modificarMueble, eliminarMueble} from '../controllers/mueblesControllers.js';

const routerMuebles = express.Router();

routerMuebles.get('/', getAllMuebles);
routerMuebles.get('/:id', getMueble);
routerMuebles.post('/', agregarMuebles);
routerMuebles.put('/:id', modificarMueble);
routerMuebles.delete('/:id', eliminarMueble);

export default routerMuebles;