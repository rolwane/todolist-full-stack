const router = require('express').Router();

router.get('/users', (_reques, response) => response.status(200).send('Hello, World!'));

module.exports = router;
