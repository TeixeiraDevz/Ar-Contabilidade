import { Schema, model } from 'mongoose';

const ClienteSchema = new Schema({
  nome: String,
  cpfCnpj: String,
  tipo: { type: String, enum: ['PF', 'PJ'] },
  telefone: String,
  email: String,
  dataCadastro: { type: Date, default: Date.now }
});

export default model('Cliente', ClienteSchema);