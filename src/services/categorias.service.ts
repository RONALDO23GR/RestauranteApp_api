import AppDataSource from "../config/appdatasource";
import { Categorias } from "../entities/categorias";

const repository = AppDataSource.getRepository(Categorias);

export const insertarCategorias = async (categorias: Partial<Categorias> ) => {
    await repository.save(categorias);
}

export const listarCategorias = async (): Promise<Categorias[]> => {
    return await Categorias.find();
};