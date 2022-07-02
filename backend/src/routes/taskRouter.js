const router = require('express').Router();

const taskController = require('../controllers/taskController');
const taskMiddleware = require('../middlewares/taskMiddleware');

router.get('/tasks',
  taskMiddleware.validateGetBody,
  taskController.getAllByUserId
);

router.post('/tasks', taskController.addNewTask);

module.exports = router;
