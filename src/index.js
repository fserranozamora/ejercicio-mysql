import express from 'express';
import cors from 'cors';
import conectarBD from '../config/db.js';
import routerMuebles from '../routes/routesMueble.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use('/muebles', routerMuebles);

try {
    await conectarBD.authenticate();
    console.log('La conexión ha sido establecida');
  } catch (error) {
    console.error('No se puede conectar con la base de datos', error);
  }
  


app.get('/', (req, res) => {
    res.send("Serra-Muebles Base de datos");
});


app.listen(5000, () => {
    console.log("El servidor está corriendo en http://localhost:5000/");
});