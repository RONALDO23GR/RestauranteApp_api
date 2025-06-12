import { Router } from "express";
import { insertarProductos, listarProductos } from "../controllers/productos.controller";

const router: Router = Router();
router.post('/', insertarProductos);
router.get('/',listarProductos);

export default router;