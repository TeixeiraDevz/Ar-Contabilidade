import { Request, Response } from 'express';
import Cliente from '../models/ClienteModel';
import { CreateClienteDTO } from '../dtos/ClienteDTO';

class ClienteController {
  async cadastrar(req: Request, res: Response) {
    const data: CreateClienteDTO = req.body;
    const cliente = await Cliente.create(data);
    return res.status(201).json(cliente);
  }

  async listar(req: Request, res: Response) {
    const clientes = await Cliente.find();
    return res.json(clientes);
  }
}

export default new ClienteController();