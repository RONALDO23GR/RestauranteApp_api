import AppDataSource from "../config/appdatasource";
import { Restaurantes } from "../entities/restaurantes";

const repository = AppDataSource.getRepository(Restaurantes);

export const insertarRestaurantes = async (restaurantes: Partial<Restaurantes> ) => {
    await repository.save(restaurantes);
}

export const listarRestaurantes = async (): Promise<Restaurantes[]> => {
    return await Restaurantes.find();
};