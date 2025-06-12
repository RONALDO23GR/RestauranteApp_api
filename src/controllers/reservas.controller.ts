import { Request, Response } from 'express';
import { Reservas} from '../entities/reservas';
import * as reservasService from "../services/reservas.service";
import { BaseResponse } from '../shared/base_response';
import { MensajeController } from '../shared/constants';

export const insertarReservas = async (req: Request, res: Response) => {
    try {
        const reservas: Partial<Reservas> = req.body;
        await reservasService.insertarReservas(reservas);
        res.json(BaseResponse.success(null,MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarReservas = async (req: Request, res: Response) => {
    try {
        const lista = await reservasService.listarReservas(); // llamada al servicio
        res.json(BaseResponse.success(lista, MensajeController.LISTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
