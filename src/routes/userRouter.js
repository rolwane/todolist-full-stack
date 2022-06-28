const router = require('express').Router();

const userController = require('../controllers/userController');

router.post('/user', userController.registerNewUser);

module.exports = router;
