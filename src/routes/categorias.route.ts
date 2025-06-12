import { Router } from "express";
import { insertarCategorias, listarCategorias } from "../controllers/categorias.controller";

const router: Router = Router();
router.post('/', insertarCategorias);
router.get('/',listarCategorias);

export default router;