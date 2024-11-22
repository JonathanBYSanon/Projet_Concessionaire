const Options = require('../models/options');

module.exports = {
    getAll: async (req, res) => {
        try {
            const options = await Options.findAll();
            res.json(options);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la récupération des options.' });
        }
    },

    getById: async (req, res) => {
        try {
            const option = await Options.findByPk(req.params.id);
            if (!option) return res.status(404).json({ error: 'Option non trouvée.' });
            res.json(option);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la récupération de l’option.' });
        }
    },

    create: async (req, res) => {
        try {
            const option = await Options.create(req.body);
            res.status(201).json(option);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la création de l’option.' });
        }
    },

    update: async (req, res) => {
        try {
            const option = await Options.findByPk(req.params.id);
            if (!option) return res.status(404).json({ error: 'Option non trouvée.' });
            await option.update(req.body);
            res.json(option);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la mise à jour de l’option.' });
        }
    },

    delete: async (req, res) => {
        try {
            const option = await Options.findByPk(req.params.id);
            if (!option) return res.status(404).json({ error: 'Option non trouvée.' });
            await option.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la suppression de l’option.' });
        }
    }
};
