import { Request, Response } from 'express';
import { Carrito } from '../entities/carrito';
import * as carritoService from "../services/carrito.service";
import { BaseResponse } from '../shared/base_response';
import { MensajeController } from '../shared/constants';

export const insertarCarrito = async (req: Request, res: Response) => {
    try {
        const carrito: Partial<Carrito> = req.body;
        await carritoService.insertarCarrito(carrito);
        res.json(BaseResponse.success(null,MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarCarrito = async (req: Request, res: Response) => {
    try {
        const lista = await carritoService.listarCarrito();
        res.json(BaseResponse.success(lista,MensajeController.LISTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}