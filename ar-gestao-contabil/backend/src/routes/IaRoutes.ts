import { Router } from 'express';
import IaController from '../controllers/IaController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post('/ia/assistente', asyncHandler((req, res) => IaController.perguntar(req, res)));

export default router;