import { Router } from "express";
import { insertarCarrito, listarCarrito } from "../controllers/carrito.controller";

const router: Router = Router();
router.post('/', insertarCarrito);
router.get('/',listarCarrito);

export default router;