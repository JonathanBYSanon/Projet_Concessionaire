import { Role, Utilisateur } from '../models/Relations.js';

const authorisation = roles => async (req, res, next) => {
    try {
        const user = await Utilisateur.findByPk(req.user.id, {
            include: Role
        });

        if (!roles.includes(user.Role.titre)) {
            return res.status(403).json({ message: "Non autorisé"});
        }
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default authorisation;