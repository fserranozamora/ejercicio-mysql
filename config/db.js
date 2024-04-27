import { Sequelize } from "sequelize";

const conectarBD = new Sequelize('mueblesbd', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default conectarBD;