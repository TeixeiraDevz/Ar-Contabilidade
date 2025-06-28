import { Router } from 'express';
import ClienteController from '../controllers/ClienteController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post('/clientes', asyncHandler((req, res) => ClienteController.cadastrar(req, res)));
router.get('/clientes', asyncHandler((req, res) => ClienteController.listar(req, res)));

export default router;