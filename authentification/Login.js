import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Utilisateur, Role} from '../models/Relations.js';
import dotenv from 'dotenv';

const ENV = dotenv.config().parsed;

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Utilisateur.findOne({
            where: { email },
            include: {
              model: Role,
              attributes: ['titre'], // Récupère uniquement le titre du rôle
            },
          });
        if (!user) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        }
        const token = jwt.sign({ id: user.id }, ENV.JWT_SECRET, { expiresIn: '24h' });
        res.status(200).json({ token:token, role:user.Role.titre, message:`Bienvenue ${user.prenom} ${user.nom}` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default login;