export interface CreateClienteDTO {
    nome: string;
    cpfCnpj: string;
    tipo: 'PF' | 'PJ';
    telefone?: string;
    email?: string;
  }