import conectarBD from "../config/db.js";
import { DataTypes } from "sequelize";

const Muebles = conectarBD.define('muebles', {
    mueble:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    material:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    fecha_elaboracion:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
});

export default Muebles;