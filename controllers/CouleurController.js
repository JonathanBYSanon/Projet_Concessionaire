const Couleur = require('../models/couleur');

module.exports = {
    getAll: async (req, res) => {
        try {
            const couleurs = await Couleur.findAll();
            res.json(couleurs);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la récupération des couleurs.' });
        }
    },

    getById: async (req, res) => {
        try {
            const couleur = await Couleur.findByPk(req.params.id);
            if (!couleur) return res.status(404).json({ error: 'Couleur non trouvée.' });
            res.json(couleur);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la récupération de la couleur.' });
        }
    },

    create: async (req, res) => {
        try {
            const couleur = await Couleur.create(req.body);
            res.status(201).json(couleur);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la création de la couleur.' });
        }
    },

    update: async (req, res) => {
        try {
            const couleur = await Couleur.findByPk(req.params.id);
            if (!couleur) return res.status(404).json({ error: 'Couleur non trouvée.' });
            await couleur.update(req.body);
            res.json(couleur);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la mise à jour de la couleur.' });
        }
    },

    delete: async (req, res) => {
        try {
            const couleur = await Couleur.findByPk(req.params.id);
            if (!couleur) return res.status(404).json({ error: 'Couleur non trouvée.' });
            await couleur.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la suppression de la couleur.' });
        }
    }
};

