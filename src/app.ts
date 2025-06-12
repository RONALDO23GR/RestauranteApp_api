import express, { Application, Request, Response } from 'express';
import usuarioRouter from './routes/usuario.route';
import restaurantesRouter from './routes/restaurantes.route';
import reservasRouter from './routes/reservas.route';
import categoriasRouter from './routes/categorias.route';
import productosRouter from './routes/productos.route';
import carritoRouter from './routes/carrito.route';
import AppDataSource from './config/appdatasource';

const app: Application = express();
    
app.use(express.json());
app.use('/api/v1/usuarios',usuarioRouter);
app.use('/api/v1/restaurantes',restaurantesRouter);
app.use('/api/v1/reservas',reservasRouter);
app.use('/api/v1/categorias',categoriasRouter);
app.use('/api/v1/productos',productosRouter);
app.use('/api/v1/carrito',carritoRouter);

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}


export default app;





/* app.get('/saludar', async (req: Request, res: Response) => {
    console.log('Params:', req.params);
    console.log('Query:', req.query);
    console.log('Body:', req.body);
    res.send('Hola, Bienvenido a la API');
});*/