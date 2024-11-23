const express = require('express');
const router = express.Router();
const optionsController = require('./controllers/optionsController');

router.get('/', optionsController.getAll);
router.get('/:id', optionsController.getById);
router.post('/', optionsController.create);
router.put('/:id', optionsController.update);
router.delete('/:id', optionsController.delete);

module.exports = router;
