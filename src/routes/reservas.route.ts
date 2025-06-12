import { Router } from "express";
import { insertarReservas, listarReservas } from "../controllers/reservas.controller";

const router: Router = Router();
router.post('/', insertarReservas);
router.get('/', listarReservas);

export default router;