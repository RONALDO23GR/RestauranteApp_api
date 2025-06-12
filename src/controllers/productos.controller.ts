import { Request, Response } from 'express';
import { Productos } from '../entities/productos';
import * as productosService from "../services/productos.service";
import { BaseResponse } from '../shared/base_response';
import { MensajeController } from '../shared/constants';

export const insertarProductos = async (req: Request, res: Response) => {
    try {
        const productos: Partial<Productos> = req.body;
        await productosService.insertarProductos(productos);
        res.json(BaseResponse.success(null,MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarProductos = async (req: Request, res: Response) => {
    try {
        const lista = await productosService.listarProductos();
        res.json(BaseResponse.success(lista,MensajeController.LISTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}
