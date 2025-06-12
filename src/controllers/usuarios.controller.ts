import { Request, Response } from 'express';
import { Usuarios } from '../entities/usuarios';
import * as usuarioService from "../services/usuarios.service";
import { BaseResponse } from '../shared/base_response';
import { MensajeController } from '../shared/constants';

export const insertarUsuario = async (req: Request, res: Response) => {
    try {
        const usuarios: Partial<Usuarios> = req.body;
        await usuarioService.insertarUsuario(usuarios);
        res.json(BaseResponse.success(null,MensajeController.INSERTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

export const listarUsuario = async (req: Request, res: Response) => {
    try {
        const lista = await usuarioService.listarUsuario();
        res.json(BaseResponse.success(lista,MensajeController.LISTADO_OK));
    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}
