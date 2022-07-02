const router = require('express').Router();

const taskController = require('../controllers/taskController');
const taskMiddleware = require('../middlewares/taskMiddleware');

router.get('/tasks',
  taskMiddleware.validateGet,
  taskController.getAllByUserId
);

router.post('/tasks',
  taskMiddleware.validateBody,
  taskController.addNewTask
);

router.delete('/tasks/:id',
  taskController.deleteTask
);

router.put('/tasks/:id',
  taskMiddleware.validateEdit,
  taskController.editTask,
);

module.exports = router;
