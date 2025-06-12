import AppDataSource from "../config/appdatasource";
import { Reservas } from "../entities/reservas";

const repository = AppDataSource.getRepository(Reservas);

export const insertarReservas = async (reservas: Partial<Reservas> ) => {
    await repository.save(reservas);
}

export const listarReservas = async (): Promise<Reservas[]> => {
    return await Reservas.find();
};