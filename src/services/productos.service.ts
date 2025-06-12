import AppDataSource from "../config/appdatasource";
import { Productos } from "../entities/productos";

const repository = AppDataSource.getRepository(Productos);

export const insertarProductos = async (productos: Partial<Productos> ) => {
    await repository.save(productos);
}

export const listarProductos = async (): Promise<Productos[]> => {
    return await Productos.find();
};