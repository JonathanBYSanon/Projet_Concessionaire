import jwt from 'jsonwebtoken';

const verifierToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Non autorisé' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default verifierToken;