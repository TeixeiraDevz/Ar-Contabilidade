import { Request, Response } from 'express';
import User from '../models/UserModel';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';

class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(400).json({ message: 'Credenciais inválidas' });
    }

    const token = generateToken(user._id.toString());
    return res.json({ token });
  }
}

export default new AuthController();