import { Router } from "express";
import { insertarRestaurantes, listarRestaurantes } from "../controllers/restaurante.controller";

const router: Router = Router();
router.post('/', insertarRestaurantes);
router.get('/',listarRestaurantes);

export default router;