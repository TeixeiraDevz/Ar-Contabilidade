import { Router } from 'express';
import ClienteRoutes from './ClienteRoutes';
import AuthRoutes from './AuthRoutes';
import IaRoutes from './IaRoutes';

const router = Router();

router.use(AuthRoutes);
router.use(ClienteRoutes);
router.use(IaRoutes);

export default router;