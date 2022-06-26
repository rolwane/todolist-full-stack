const router = require('express').Router();

router.get('/tasks', (_reques, response) => response.status(200).send('Hello, World!'));

module.exports = router;
