const router = require('express').Router();

const taskController = require('../controllers/taskController');

router.get('/tasks', taskController.getAllByUserId);

module.exports = router;
