import AppDataSource from "../config/appdatasource";
import { Usuarios } from "../entities/usuarios";

const repository = AppDataSource.getRepository(Usuarios);

export const insertarUsuario = async (usuarios: Partial<Usuarios> ) => {
    await repository.save(usuarios);
}

export const listarUsuario = async (): Promise<Usuarios[]> => {
    return await Usuarios.find();
};