import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// Charger les variables d'environnement
const ENV = dotenv.config().parsed;

const verifierToken = (req, res, next) => {
    // Obtenir le token de l'en-tête Authorization
    const token = req.header('Authorization') || '';
    const tokenParts = token.split(" ");

    // Vérifier le format Bearer
    if (tokenParts[0] !== 'Bearer' || !tokenParts[1]) {
        return res.status(401).json({ message: 'Format de token invalide' });
    }

    const extractedToken = tokenParts[1];

    try {
        // Vérifier le token
        const decoded = jwt.verify(extractedToken, ENV.JWT_SECRET);
        req.user = decoded; // Attacher la charge utile décodée à la requête
        next(); // Passer au middleware suivant
    } catch (error) {
        // Gérer les erreurs spécifiques de JWT
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expiré' });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Token invalide' });
        }
        // Erreur générale du serveur
        return res.status(500).json({ message: 'Erreur serveur', details: error.message });
    }
};

export default verifierToken;