import AppDataSource from "../config/appdatasource";
import { Carrito } from "../entities/carrito";

const repository = AppDataSource.getRepository(Carrito);

export const insertarCarrito = async (carrito: Partial<Carrito> ) => {
    await repository.save(carrito);
}

export const listarCarrito = async (): Promise<Carrito[]> => {
    return await Carrito.find();
};