import { Request, Response } from 'express';
import { IaService } from '../services/IaService';

class IaController {
  async perguntar(req: Request, res: Response) {
    const { mensagem } = req.body;
    const resposta = await IaService.responder(mensagem);
    return res.json({ resposta });
  }
}

export default new IaController();