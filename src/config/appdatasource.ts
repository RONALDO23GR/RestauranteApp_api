import 'dotenv/config';
import { DataSource } from "typeorm";
import { Carrito } from "../entities/carrito";
import { Categorias } from "../entities/categorias";
import { Productos } from "../entities/productos";
import { Usuarios } from "../entities/usuarios";
import { Reservas } from "../entities/reservas";
import { Restaurantes } from "../entities/restaurantes";

const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT as any || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'name',
    entities: [
        Usuarios,
        Restaurantes,
        Reservas,
        Categorias,
        Productos,
        Carrito,
    ]
});

export default AppDataSource;