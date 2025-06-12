import { Request, Response } from 'express';
import { Categorias } from '../entities/categorias';
import * as categoriasService from "../services/categorias.service";
import { BaseResponse } from '../shared/base_response';
import { MensajeController } from '../shared/constants';

export const insertarCategorias = async (req: Request, res: Response) => {
    try {
        const categorias: Partial<Categorias> = req.body;
        await categoriasService.insertarCategorias(categorias);
        res.json(BaseResponse.success(null,MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarCategorias = async (req: Request, res: Response) => {
    try {
        const lista = await categoriasService.listarCategorias();
        res.json(BaseResponse.success(lista,MensajeController.LISTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}