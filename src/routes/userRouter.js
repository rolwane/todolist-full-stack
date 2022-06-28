const router = require('express').Router();

const userMiddleware = require('../middlewares/userMiddleware');
const userController = require('../controllers/userController');

router.post('/user', userMiddleware.validateBody, userController.registerNewUser);

module.exports = router;
