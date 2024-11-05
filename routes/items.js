const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');
const loggingMiddleware = require('../middlewares/loggingMiddleware');

// Middleware de logging
router.use(loggingMiddleware);

// Rotas para listar, criar, atualizar e deletar itens
router.get('/', itemsController.listItems);
router.post('/', itemsController.createItem);
router.put('/:id', itemsController.updateItem);
router.delete('/:id', itemsController.deleteItem);

module.exports = router;
