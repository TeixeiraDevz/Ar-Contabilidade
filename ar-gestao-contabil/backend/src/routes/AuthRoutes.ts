import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.post('/login', asyncHandler((req, res) => AuthController.login(req, res)));

export default router;