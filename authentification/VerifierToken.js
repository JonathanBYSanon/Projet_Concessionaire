import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const ENV = dotenv.config().parsed;

const verifierToken = (req, res, next) => {
    // Get token from Authorization header
    const token = req.header('Authorization') || '';
    const tokenParts = token.split(" ");

    // Check for Bearer format
    if (tokenParts[0] !== 'Bearer' || !tokenParts[1]) {
        return res.status(401).json({ message: 'Format de token invalide' });
    }

    const extractedToken = tokenParts[1];

    try {
        // Verify the token
        const decoded = jwt.verify(extractedToken, ENV.JWT_SECRET);
        req.user = decoded; // Attach decoded payload to request
        next(); // Proceed to the next middleware
    } catch (error) {
        // Handle specific JWT errors
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expiré' });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Token invalide'});
        }
        // General server error
        return res.status(500).json({ message: 'Erreur serveur', details: error.message });
    }
};

export default verifierToken;