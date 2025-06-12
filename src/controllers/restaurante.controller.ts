import { Request, Response } from 'express';
import { Restaurantes} from '../entities/restaurantes';
import * as restauranteService from "../services/restaurantes.service";
import { BaseResponse } from '../shared/base_response';
import { MensajeController } from '../shared/constants';

export const insertarRestaurantes = async (req: Request, res: Response) => {
    try {
        const restaurantes: Partial<Restaurantes> = req.body;
        await restauranteService.insertarRestaurantes(restaurantes);
        res.json(BaseResponse.success(null,MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarRestaurantes = async (req: Request, res: Response) => {
    try {
        const lista = await restauranteService.listarRestaurantes();
        res.json(BaseResponse.success(lista,MensajeController.LISTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}