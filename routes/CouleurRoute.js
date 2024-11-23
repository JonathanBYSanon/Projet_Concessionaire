const express = require('express');
const router = express.Router();
const couleurController = require('./controllers/couleurController');

router.get('/', couleurController.getAll);
router.get('/:id', couleurController.getById);
router.post('/', couleurController.create);
router.put('/:id', couleurController.update);
router.delete('/:id', couleurController.delete);

module.exports = router;
