const router = require('express').Router();

const userMiddleware = require('../middlewares/userMiddleware');
const userController = require('../controllers/userController');

router.post('/user/register',
  userMiddleware.validateBody,
  userMiddleware.checkUserAlreadyExists,
  userController.registerNewUser
);

router.post('/user/login',
  userController.userLogin
);

module.exports = router;
